import { Image, StyleSheet, Text, View } from "react-native";
import OutlineButton from "./UI/OutlineButton";
import { Colors } from "../constants/colors";
import {
  PermissionStatus,
  useForegroundPermissions,
  getCurrentPositionAsync,
} from "expo-location";
import { getMapPreview } from "../utils/utils";
import { useState } from "react";

function LocationPicker() {
  const [locationPermissionsInfo, requestPermissions] =
    useForegroundPermissions();
  const [pickedImage, setPickedImage] = useState();

  async function verifyPermissions() {
    if (locationPermissionsInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionsResponse = await requestPermissions();
      return permissionsResponse.granted;
    }
    if (locationPermissionsInfo.status === PermissionStatus.DENIED) {
      Alert.alert("No Permission", "Pls give camera permission");
      return false;
    }
    return true;
  }

  async function locateUser() {
    const permissionStatus = await verifyPermissions();
    if (!permissionStatus) {
      return;
    }
    const location = await getCurrentPositionAsync({});
    setPickedImage({
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    });
  }
  function pickLocation() {}

  let preview = <Text>No locaiton</Text>;

  if (pickedImage) {
    preview = (
      <Image style={styles.image} source={{ uri: getMapPreview(pickedImage?.lat, pickedImage?.lon)}} />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{preview}</View>
      <View style={styles.actions}>
        <OutlineButton icon={"location"} onPress={locateUser}>
          Locate
        </OutlineButton>
        <OutlineButton icon={"map"} onPress={pickLocation}>
          Pick Location
        </OutlineButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    height: 200,
    width: "100%",
    marginVertical: 8,
    backgroundColor: Colors.primary100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image : {
    height: "100%",
    width: "100%"
  }
});
