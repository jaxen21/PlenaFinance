import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ToggleFavouriteButton = ({ isFavorite, onPress, size }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                color={isFavorite ? "#FF8181" : "#323743"}
                size={size}
                style={{ margin: 5 }}
            />
        </TouchableOpacity>
    );
};

export default ToggleFavouriteButton;
