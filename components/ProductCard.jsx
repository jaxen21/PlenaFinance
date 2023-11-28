import { useContext } from "react";
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from "react-native"
import AddToCartIconButton from "./iconButtons/AddToCart";
import ToggleFavouriteButton from "./iconButtons/ToggleFavouriteButton";
import { CartContext } from "../contexts/CartContext";
import { FavoriteContext } from "../contexts/FavouriteContext";
const { width: screenWidth } = Dimensions.get('window');

const ProductCard = ({ navigation, product }) => {
    const { title, thumbnail, price } = product
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    const { favoriteItems, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);
    const isFavorite = favoriteItems.some(item => item.id === product.id);

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFromFavorites(product);
        } else {
            addToFavorites(product);
        }
    };

    const navigateToProductDetails = () => {
        navigation.navigate('ProductDetails', { productId: product.id });
    }

    return (
        <TouchableOpacity onPress={navigateToProductDetails}>
            <View style={style.productCardContainer}>
                <ToggleFavouriteButton size={14} isFavorite={isFavorite} onPress={toggleFavorite} />
                <Image
                    style={style.productImage}
                    source={{ uri: thumbnail }}
                />
                <View style={style.productDetailContainer}>
                    <View style={style.productDetail}>
                        <Text style={style.productPrice}>{`$${price}`}</Text>
                        <Text numberOfLines={1} style={style.productTitle}>{title}</Text>
                    </View>
                    <AddToCartIconButton onPressHandler={addProductToCart} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    productCardContainer: {
        marginBottom: 20,
        width: screenWidth * 0.425,
        height: 194,
        borderRadius: 12,
        backgroundColor: "#F8F9FB",
        flexShrink: 0,
    },
    productImage: {
        alignSelf: "center",
        width: "80%",
        height: "50%",
        borderRadius: 10,
    },
    productDetailContainer: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 17,
        marginTop: 20,
    },
    productDetail: {
        height: 125,
        width: "80%",
    },
    productPrice: {
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: 14,
    },
    productTitle: {
        fontStyle: "normal",
        fontSize: 12,
    },
})

export default ProductCard;