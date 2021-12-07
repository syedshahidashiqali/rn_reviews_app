import React from "react";
import {View, Text} from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function ReviewDetails({route,navigation}) {
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>title: { route.params.title }</Text>
            <Text style={globalStyles.titleText}>body: { route.params.body }</Text>
            <Text style={globalStyles.titleText}>rating: { route.params.rating }</Text>
        </View>
    )
}