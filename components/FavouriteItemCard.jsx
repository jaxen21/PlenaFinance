import { useContext } from "react";
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FavoriteContext } from "../contexts/FavouriteContext";

const { width: screenWidth } = Dimensions.get('window');

const FavoriteItemCard = ({ favoriteItem }) => {
    const { title, thumbnail } = favoriteItem;
    const { removeFromFavorites } = useContext(FavoriteContext);

    const removeFavoriteHandler = () => removeFromFavorites(favoriteItem);

    return (
        <View style={styles.favoriteItemContainer}>
            <Image
                style={styles.thumbnail}
                source={{ uri: thumbnail }}
            />
            <View style={styles.detailContainer}>
                <Text numberOfLines={1} style={styles.productTitle}>{title}</Text>
            </View>
            <TouchableOpacity onPress={removeFavoriteHandler}>
                <Ionicons name="close-circle-outline" style={styles.iconStyle} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    favoriteItemContainer: {
        width: screenWidth * 0.9,
        marginTop: 20,
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
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
    iconStyle: {
        alignSelf: "center",
        fontSize: 25
    },
});

export default FavoriteItemCard;
