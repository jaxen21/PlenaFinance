import { useContext } from "react";
import Button from "../components/Button";
import { CartContext } from "../contexts/CartContext";
import CartItemCard from "../components/CartItemCard";
import BackButton from "../components/iconButtons/BackButton"
import { StyleSheet, View, Dimensions, Text, ScrollView } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Cart = ({ navigation }) => {
    const { cartItems, cartCount, cartTotal } = useContext(CartContext);

    const deliveryCharges = cartItems.length ? 2.00 : 0.00

    const backButtonHandler = () => navigation.navigate("Home")
    return (
        <View style={style.cartContainer}>
            <View style={style.cartHeaderContainer}>
                <BackButton onPressHandler={backButtonHandler} />
                <Text style={style.cartHeaderTitle}>
                    Shopping Cart ({cartCount})
                </Text>
            </View>
            <ScrollView>
                <View style={style.cartItemsContainer}>
                    {cartItems.map((cartItem) => (
                        <View key={cartItem.id}>
                            <CartItemCard
                                cartItem={cartItem}
                            />
                            <View style={style.cartItemDivider} />
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={style.checkoutContainer}>
                <View style={style.checkoutTextContainer}>
                    <Text style={style.checkoutText}>Subtotal</Text>
                    <Text>${cartTotal}</Text>
                </View>
                <View style={style.checkoutTextContainer}>
                    <Text style={style.checkoutText}>Delivery</Text>
                    <Text>${deliveryCharges}</Text>
                </View>
                <View style={style.checkoutTextContainer}>
                    <Text style={style.checkoutText}>Subtotal</Text>
                    <Text>${cartTotal + deliveryCharges}</Text>
                </View>
                <Button
                    style={{ width: screenWidth * 0.8, marginTop: 5, alignSelf: "center" }}
                    title={"Proceed to Checkout"}
                // onPress={}
                />
            </View>
        </View>
    )
}

Cart.navigationOptions = () => ({
    headerShown: false
});

const style = StyleSheet.create({
    cartContainer: {
        width: screenWidth,
        backgroundColor: "#fff",
        flex: 1,
    },
    cartHeaderContainer: {
        marginTop: screenHeight * 0.08,
        marginLeft: 24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    cartHeaderTitle: {
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: screenWidth * 0.23
    },
    cartItemsContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: 30
    },
    cartItemDivider: {
        borderWidth: 0.5,
        borderColor: "#EBEBFB",
        width: screenWidth * 0.8,
        alignSelf: "center",
        marginTop: 15,
    },
    checkoutContainer: {
        paddingVertical: 10,
        width: screenWidth * 0.95,
        height: screenHeight * 0.3,
        alignSelf: "center",
        backgroundColor: "#F8F9FB",
        borderRadius: 30,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
    },
    checkoutTextContainer: {
        alignSelf: "center",
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12
    },
    checkoutText: {
        color: "#616A7D"
    }
})

export default Cart;