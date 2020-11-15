import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAction, increaseAction, resetAction } from "../actions/counter_action";
import MainButton from "../components/main_button";

export default function CounterScreen() {
  const times = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  const step = 5;

  const increase = () => {
    dispatch(increaseAction(step));
  }

  const decrease = () => {
    dispatch(decreaseAction(step));
}

  const resetCount = () => {
    dispatch(resetAction());
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {times}</Text>
      <View style={styles.buttonContainer}>
        <MainButton title="Decrement -" onButtonPress={decrease} />
        <MainButton title="Increment +" onButtonPress={increase} />
        <MainButton title="Reset" onButtonPress={resetCount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
      alignSelf: "center"
  },
  text: {
    alignSelf: "center",
    fontSize: 27,
    fontWeight: "700",
    color: "blue"
  },
});
