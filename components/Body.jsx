import { StyleSheet, View, Dimensions, ScrollView } from "react-native"
import ProductCard from "./ProductCard"
const { width: screenWidth } = Dimensions.get('window');

const Body = ({ navigation, products }) => {
    return (
        <ScrollView>
            <View style={style.productsContainer}>
                {products?.map((product) => (
                    <View key={product.id}>
                        <ProductCard product={product} navigation={navigation} />
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    productsContainer: {
        width: screenWidth,
        display: "flex",
        flexDirection: "row",
        marginTop: "5.5%",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    }
})

export default Body