import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Button = ({ color, title, width, onPressHandler }) => {
    const buttonStyles = {
        backgroundColor: color,
        width: width,
    };

    return (
        <TouchableOpacity onPress={onPressHandler} >
            <View style={[styles.buttonContainer, buttonStyles]}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 12,
        overflow: "hidden",
        paddingVertical: 10,
        alignItems: "center",
        width: 350
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default Button;
