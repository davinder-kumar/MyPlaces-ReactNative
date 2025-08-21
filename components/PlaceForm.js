import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";
import ImagePicker from "./ImagePicker";


function PlaceForm() {
  const [titleValue, onChangeTitle] = useState("");

  const setTitle = (title) => {
    onChangeTitle(title);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={setTitle} value={titleValue} />
      </View>
      <ImagePicker />
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
    form : {
        flex: 1,
        padding: 24
    },
    label : {
        fontWeight: "bold",
        marginBottom: 4,
        color: Colors.primary500
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2, 
        backgroundColor: Colors.primary100
    }
})
