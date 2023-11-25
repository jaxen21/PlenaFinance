import { View, Button, StyleSheet, Dimensions } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const CheckoutButton = () => {
    return (
        <View style={style.buttonContainer}>
            <Button
                title="Proceed to Checkout"
                color="white"
            />
        </View>
    )
}

const style = StyleSheet.create({
    buttonContainer: {
        width: screenWidth * 0.85,
        height: 55,
        marginTop: 20,
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: "#2A4BA0",
        paddingVertical: 8,
    }
})

export default CheckoutButton;