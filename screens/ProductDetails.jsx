import { useEffect, useState, useContext } from "react";
import RatingStar from "../components/RatingStar"
import { View, StyleSheet, Dimensions, Text, ScrollView, Button } from "react-native";
import { CartContext } from "../contexts/CartContext";
import ImageCarousel from "../components/ImageCarousel";
import BackButton from "../components/iconButtons/BackButton"
import CartButton from "../components/iconButtons/CartButton"
import { FavoriteContext } from "../contexts/FavouriteContext";
import ToggleFavouriteButton from "../components/iconButtons/ToggleFavouriteButton";
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ProductDetails = ({ navigation }) => {
    const productId = navigation.getParam('productId', 0);
    const [product, setProduct] = useState({});

    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    const backButtonHandler = () => navigation.navigate("Home")

    const { favoriteItems, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);
    const isFavorite = favoriteItems.some(item => item.id === product.id);

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFromFavorites(product);
        } else {
            addToFavorites(product);
        }
    };

    const handleBuyNow = () => {
        addProductToCart()
        navigation.navigate("Cart")
    }

    const { title, brand, price, discountPercentage, description, images, rating } = product

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://dummyjson.com/products/${productId}`,
            );
            const productJSON = await response.json()
            setProduct(productJSON)
        })()
    }, [])

    return (
        <View style={style.productDetailsContainer}>
            <View style={style.productDetailsHeaderContainer}>
                <BackButton onPressHandler={backButtonHandler} />
                <CartButton navigation={navigation} color={"#1E222B"} />
            </View>
            <ScrollView>
                {title &&
                    <>
                        <View style={style.productTitleContainer}>
                            <Text style={style.productTitle}>{title}</Text>
                            <Text style={style.productBrand}>{brand}</Text>
                        </View>
                        <RatingStar rating={rating} />
                        <View style={style.imageCarouselContainer}>
                            <View style={style.addToFavoriteButton}>
                                <ToggleFavouriteButton size={25} isFavorite={isFavorite} onPress={toggleFavorite} />
                            </View>
                            {images &&
                                <ImageCarousel images={images} />
                            }
                        </View>
                        <View style={style.priceContainer}>
                            <Text style={style.price}>${price}</Text>
                            <View style={style.discountContainer}>
                                <Text style={style.discountPercentage}>
                                    ${discountPercentage} OFF
                                </Text>
                            </View>
                        </View>
                        <View style={style.buttonsContainer}>
                            <View style={style.buttonBox}>
                                <Button
                                    onPress={addProductToCart}
                                    title="Add to Cart"
                                    color="#2A4BA0"
                                />
                            </View>
                            <View
                                style={[style.buttonBox, {
                                    backgroundColor: "#2A4BA0",
                                    borderColor: "#2A4BA0",
                                    borderWidth: 1,
                                }]}
                            >
                                <Button
                                    onPress={handleBuyNow}
                                    title="Buy Now"
                                    color="#FFFFFF"
                                />
                            </View>
                        </View>
                        <View style={style.descriptionContainer}>
                            <Text style={style.descriptionHeading}>Details</Text>
                            <Text style={style.descriptionText}>{description}</Text>
                        </View>
                    </>
                }
            </ScrollView>
        </View>
    )
}

ProductDetails.navigationOptions = () => ({
    headerShown: false,
});

const style = StyleSheet.create({
    productDetailsContainer: {
        width: screenWidth,
        backgroundColor: "#fff",
        flex: 1,
        padding: 5
    },
    productDetailsHeaderContainer: {
        marginTop: screenHeight * 0.08,
        marginLeft: 24,
        marginRight: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    productTitleContainer: {
        width: screenWidth * 0.80,
        marginLeft: "5%",
        marginTop: "5%",
        display: "flex"
    },
    productTitle: {
        fontWeight: 300,
        fontSize: screenWidth * 0.12,
    },
    productBrand: {
        fontWeight: "bold",
        fontSize: screenWidth * 0.12,
    },
    imageCarouselContainer: {
        width: screenWidth,
        height: screenHeight * 0.25,
        backgroundColor: "#F8F9FB",
        marginTop: "5%",
        position: 'relative',
    },
    addToFavoriteButton: {
        width: 35,
        height: 35,
        backgroundColor: "#FFFFFF",
        alignSelf: "center",
        position: 'absolute',
        borderRadius: 20,
        top: 10,
        right: 15,
        zIndex: 1
    },
    priceContainer: {
        margin: "5%",
        width: "30%",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    price: {
        color: "#2A4BA0",
        fontWeight: "bold",
        fontSize: 18
    },
    discountContainer: {
        display: "flex",
        borderRadius: 70,
        backgroundColor: "#2A4BA0",
        padding: 2,
        alignSelf: "center"
    },
    discountPercentage: {
        fontSize: 12,
        color: "#FAFBFD",
        alignSelf: "center"
    },
    buttonsContainer: {
        margin: 10,
        width: screenWidth * 0.90,
        alignSelf: "center",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    buttonBox: {
        width: 150,
        height: 52,
        borderRadius: 25,
        borderColor: "#2A4BA0",
        borderWidth: 1,
        display: "flex",
        padding: 5
    },
    descriptionContainer: {
        margin: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 6
    },
    descriptionHeading: {
        fontWeight: 400,
        fontSize: 16,
        color: "#1E222B"
    },
    descriptionText: {
        fontWeight: 400,
        fontSize: 16,
        color: "#8891A5"
    }
})

export default ProductDetails;