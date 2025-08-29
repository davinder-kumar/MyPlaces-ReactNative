import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { Colors } from "../../constants/colors";

function OutlineButton({icon, children, onPress, color = "black", size = 24 }){
    return (
      
        <Pressable style={ ({pressed}) => [styles.container, pressed && styles.pressed] } onPress={onPress}>
            <Ionicons style={styles.icon} name={icon} color={color} size={size}/>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
       
    )
}

const styles = StyleSheet.create({
    icon : {
        marginRight: 5,
        color: Colors.primary500
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderWidth: 2,
        borderColor: Colors.primary500,
        marginVertical: 6,
        paddingHorizontal: 12,
        paddingVertical: 6
    },
    text: {
        color: Colors.primary500,
    },
    pressed: {
        opacity: 0.7
    }
    
})

export default OutlineButton
