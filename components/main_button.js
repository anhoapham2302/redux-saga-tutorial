import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function MainButton({title, onButtonPress}) {
    return (
        <TouchableOpacity 
        onPress = {onButtonPress}
        style = {styles.button}>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        width: 150,
        backgroundColor: "red",
        borderRadius: 10,
        marginVertical: 5,
    },
    text: {
        color: "white",
        fontSize: 19,
        fontWeight: "600"
    }
})
