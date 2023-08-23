import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./pages/1-login"
import Home from "./pages/2-home";
import Final from "./pages/3-final"
import Imgs from "./pages/4-imgs";
import SingleImage from "./pages/5-singleImage";
import SingleImage from "./pages/1.2-register";

const Stack = createStackNavigator()

export default function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
            name="Login"
            component={Login}
        />

        <Stack.Screen
            name="Home"
            component={Home} />

        <Stack.Screen
            name="Final"
            component={Final} />

        <Stack.Screen
          name="Imgs"
          component={Imgs} />

        <Stack.Screen
          name="SingleImage"
          component={SingleImage} />
        
        <Stack.Screen
          name="Register"
          component={} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}