import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TabBar = ({ navigation }) => {
    return (
        <View style={styles.tabBarContainer}>
            <TouchableOpacity
                style={styles.tabBarButton}
                onPress={() => navigation.navigate("Home")}
            >
                <Ionicons name="home-outline" size={24} color="#3E4554" />
                <Text style={styles.tabBarText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabBarButton}
            >
                <Ionicons name="grid-outline" size={24} color="#3E4554" />
                <Text style={styles.tabBarText}>Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabBarButton}
                onPress={() => navigation.navigate("Fav")}
            >
                <Ionicons name="heart-outline" size={24} color="#3E4554" />
                <Text style={styles.tabBarText}>Favourites</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabBarButton}
                onPress={() => navigation.navigate("More")}
            >
                <Ionicons name="menu" size={24} color="#3E4554" />
                <Text style={styles.tabBarText}>More</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tabBarContainer: {
        height: 89,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#F8F7FB",
    },
    tabBarButton: {
        alignItems: "center",
        width: 53,
        height: 41
    },
    tabBarText: {
        fontSize: 10,
        color: "#8891A5",
    },
});

export default TabBar;
