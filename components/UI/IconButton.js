import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ onPress, size, color, icon }) {
  return (
    <Pressable onPress={onPress}
    style={({pressed}) => pressed && styles.pressed}
    >
      <View>
        <Ionicons size={size} color={color} name={icon} />
      </View>
    </Pressable>
  );
}

export default IconButton;
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})