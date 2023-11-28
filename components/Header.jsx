import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SearchBox from './SearchBox';
import DeliveryBox from './DeliveryBox';
import CartButton from './iconButtons/CartButton';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.userCartContainer}>
                <Text style={styles.userName}>{`Hey, Jayesh`}</Text>
                <CartButton navigation={navigation} color={"#FFF"} />
            </View>
            <View style={styles.searchContainer}>
                <SearchBox />
            </View>
            <View style={styles.deliveryContainer}>
                <DeliveryBox />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        alignItems: "center",
        backgroundColor: "#2A4BA0",
        height: 250,
        paddingTop: screenHeight * 0.07
    },
    userCartContainer: {
        width: screenWidth * 0.9,
        height: 30,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userName: {
        color: '#F8F9FB',
        fontSize: 0.04 * screenWidth,
        fontStyle: 'normal',
        fontWeight: "bold",
        lineHeight: undefined,
    },
    searchContainer: {
        marginTop: 34,
        alignItems: 'center',
    },
    deliveryContainer: {
        flex: 1,
        marginTop: 27,
        display: "flex",
        alignItems: "center",
    }
});

export default Header;
