import { useContext } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { CartContext } from "../../contexts/CartContext";
import { Ionicons } from "@expo/vector-icons";

const CartButton = ({ navigation, color }) => {
    const { cartCount } = useContext(CartContext)

    const handlePress = () => {
        navigation.navigate("Cart");
    };

    return (
        <TouchableOpacity style={styles.cartButton} onPress={handlePress}>
            <Ionicons name="cart-outline" color={color} size={25} />
            <View style={styles.itemCountContainer}>
                <Text style={styles.itemCountText}>{cartCount}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cartButton: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative"
    },
    itemCountContainer: {
        backgroundColor: "#F9B023",
        width: 20,
        height: 20,
        borderRadius: 10,
        position: "absolute",
        top: -5,
        right: -8,
    },
    itemCountText: {
        color: "#FFFFFF",
        fontSize: 15,
        alignSelf: "center"
    },
});

export default CartButton;
