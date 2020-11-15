import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MainButton from '../components/main_button';
import { ScreenKeys } from '../constants/screen_key'

export default function HomeScreen(props) {
    //TODO: Navigate to other screens
    const onButtonPress = (screen) => {
        props.navigation.navigate(screen);
    }
    return (
        <View style = {styles.container}>
            <MainButton title = "Counter Screen" onButtonPress = {() => {onButtonPress(ScreenKeys.CounterScreen)}}/>
            <MainButton title = "Other Screen" onButtonPress = {null}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

})
