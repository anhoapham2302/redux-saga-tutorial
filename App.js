import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-redux";
import { ScreenKeys } from "./constants/screen_key";
import { HeaderStyle } from "./constants/styles";
import CounterScreen from "./screens/counter_screen";
import HomeScreen from "./screens/home_screen";
import { AppStore } from "./store";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenKeys.HomeScreen}>
      {ScreenInStack(ScreenKeys.HomeScreen, HomeScreen, "Home")}
      {ScreenInStack(ScreenKeys.CounterScreen, CounterScreen, "Counter")}
    </Stack.Navigator>
  );
};

//TODO: declare stack
const ScreenInStack = (nameScreen, component, title) => {
  return (
    <Stack.Screen
      name={nameScreen}
      component={component}
      options={{ ...HeaderStyle, title: title }}
    />
  );
};

export default function App() {
  return (
    <Provider store={AppStore}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
