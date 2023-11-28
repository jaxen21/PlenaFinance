import { useContext } from "react";
import BackButton from "../components/iconButtons/BackButton";
import FavoriteItemCard from "../components/FavouriteItemCard";
import { FavoriteContext } from "../contexts/FavouriteContext";
import { StyleSheet, Text, Dimensions, View, ScrollView } from "react-native";
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
            <ScrollView>
                <View style={style.FavouriteItemsContainer}>
                    {favoriteItems.map((favoriteItem) => (
                        <View key={favoriteItem.id}>
                            <FavoriteItemCard
                                favoriteItem={favoriteItem}
                            />
                            <View style={style.FavouriteItemDivider} />
                        </View>
                    ))}
                </View>
            </ScrollView>
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
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: screenWidth * 0.23
    },
    FavouriteItemsContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: 30
    },
    FavouriteItemDivider: {
        borderWidth: 0.5,
        borderColor: "#EBEBFB",
        width: screenWidth * 0.8,
        alignSelf: "center",
        marginTop: 15,
    },
})

export default Favourites;