import { useContext } from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import { FavoriteContext } from "../contexts/FavouriteContext";
import BackButton from "../components/iconButtons/BackButton";
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Favourites = ({ navigation }) => {
    const { favoriteItems } = useContext(FavoriteContext)
    const backButtonHandler = () => navigation.navigate("Home")

    return (
        <View style={style.FavouriteContainer}>
            <View style={style.FavouriteHeaderContainer}>
                <BackButton onPressHandler={backButtonHandler} />
                <Text style={style.FavouriteHeaderTitle}>
                    Favourites ({favoriteItems.length})
                </Text>
            </View>
        </View>
    )
}

Favourites.navigationOptions = () => ({
    headerShown: false
});

const style = StyleSheet.create({
    FavouriteContainer: {
        width: screenWidth,
        backgroundColor: "#fff",
        flex: 1,
    },
    FavouriteHeaderContainer: {
        marginTop: screenHeight * 0.08,
        marginLeft: 24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    FavouriteHeaderTitle: {
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: screenWidth * 0.23
    },
})

export default Favourites;