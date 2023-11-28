import Body from '../components/Body';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

const Home = ({ navigation }) => {
    const [productsData, setProductsData] = useState([])
    useEffect(() => {
        (async () => {
            const response = await fetch(
                'https://dummyjson.com/products',
            );
            const productsJSON = await response.json()
            setProductsData(productsJSON["products"])
        })()
    }, [])

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Body navigation={navigation} products={productsData} />
            <TabBar navigation={navigation} />
        </View>
    );
};

Home.navigationOptions = {
    title: "",
    headerShown: false,
};

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        backgroundColor: "#fff",
        borderRadius: 20,
        flex: 1,
    },
})

export default Home;
