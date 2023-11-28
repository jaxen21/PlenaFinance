import { useContext } from "react";
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";
const { width: screenWidth } = Dimensions.get('window');

const CartItemCard = ({ cartItem }) => {
    const { title, price, thumbnail, quantity } = cartItem
    const { addItemToCart, removeItemFromCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <View style={style.cartItemContainer}>
            <Image
                style={style.thumbnail}
                source={{ uri: thumbnail }}
            />
            <View style={style.detailContainer}>
                <Text numberOfLines={1} style={style.productTitle}>{title}</Text>
                <Text style={style.productPrice}>{`$${price}`}</Text>
            </View>
            <TouchableOpacity onPress={removeItemHandler}>
                <Ionicons name="remove-circle-outline" style={style.iconStyle} />
            </TouchableOpacity>
            <Text style={style.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={addItemHandler}>
                <Ionicons name="add-circle-outline" style={style.iconStyle} />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    cartItemContainer: {
        width: screenWidth * 0.9,
        marginTop: 20,
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    thumbnail: {
        width: 30,
        height: 30,
        alignSelf: "center",
    },
    detailContainer: {
        marginLeft: 10,
        alignSelf: "center",
    },
    productTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        width: 100,
    },
    productPrice: {
        fontWeight: 'normal',
        fontSize: 14,
    },
    iconStyle: {
        alignSelf: "center",
        color: "#130F26",
        fontSize: 25
    },
    quantityText: {
        alignSelf: "center",
    },
});

export default CartItemCard;
