import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../constants/colors";
import OutlineButton from "./UI/OutlineButton";

const ImagePicker = () => {
  const [camPermissionInfo, requestPermissions] = useCameraPermissions();
  const [imageOrg, setImage] = useState();
  async function verifyPermissions() {
    if (camPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionsResponse = await requestPermissions();
      return permissionsResponse.granted;
    }
    if (camPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert("No Permission", "Pls give camera permission");
      return false;
    }
    return true;
  }

  async function pickImage() {
    const permissions = await verifyPermissions();
    if (!permissions) {
      Alert.alert("No Permission", "Pls give camera permission");
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImage(image.assets[0].uri);
  }
  return (
    <View>
      <View style={styles.imagePreview}>
        {imageOrg ? (
          <Image style={styles.image} source={{uri: imageOrg}} />
        ) : (
          <Text style={styles.image}>No preview available.</Text>
        )}
      </View>
      <OutlineButton icon={"camera"} title="Add Image" onPress={pickImage} >Take Image</OutlineButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    height: 200,
    width: "100%",
    marginVertical: 8,
    backgroundColor: Colors.primary100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
