import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

function PlaceItem({place}) {
    return (
        <Pressable onPress={onSelect} style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
            <Image source={{ uri: place.imageUri }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{place.title}</Text>
                <Text style={styles.address}>{place.address}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        overflow: 'hidden',
    },
    pressed: {
        opacity: 0.7,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
        marginRight: 12,
    },
    info: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    address: {
        color: '#666',
        fontSize: 14,
    },
});

export default PlaceItem;