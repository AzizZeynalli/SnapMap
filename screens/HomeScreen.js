import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Home Screen</Text>
        <Button
            onPress={() => navigation.navigate("Profile")}
            title="Go to Profile"
        />
        </View>
    );
}