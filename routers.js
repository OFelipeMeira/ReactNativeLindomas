import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./pages/login";
import Create from "./pages/create";
import Read from "./pages/read";
import Update from "./pages/update";
import Delete from "./pages/delete";
import Home from "./pages/home";
import { Feather } from "@expo/vector-icons";

const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'black',
                    paddingVertical: 1,
                    borderTopColor: 'transparent',
                },
                tabBarActiveBackgroundColor: '#f0f',
                tabBarInactiveTintColor: '#aaa'
            }}
        >

            <Tab.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />

        </Tab.Navigator>
    )
}

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{ 
                        headerShown: false,
                        //tabBarStyle:{display:'none'}
                        tabBarIcon: ({size, color})=>(
                            <Feather name="users" size={5} color={"black"}/>
                        )
                     }}
                />
{/* 
                <Pilha.Screen
                    name="Create"
                    component={Create}
                    options={{ headerShown: false }}
                />


                <Pilha.Screen
                    name="Read"
                    component={Read}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Update"
                    component={Update}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Delete"
                    component={Delete}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                /> */}

            </Pilha.Navigator>
        </NavigationContainer>
    )
}