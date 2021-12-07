import "react-native-gesture-handler";
import React from "react";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

export default function Navigator(){
    return(
        <NavigationContainer>
            <HomeStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#eee",
                        height: 60,
                    },
                    headerTintColor: "#444"
                }}
            >
                <HomeStack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        title: "GameZone"
                    }}
                />
                <HomeStack.Screen 
                    name="Review Details" 
                    component={ReviewDetails} 
                    options={{
                        title:"Review Details"
                    }}
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
};