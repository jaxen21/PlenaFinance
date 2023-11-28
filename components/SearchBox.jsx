import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
const { width: screenWidth } = Dimensions.get('window');

const SearchBox = () => {
    return (
        <View style={styles.searchContainer}>
            <Ionicons
                style={styles.searchIcon}
                name="search-outline" color="#2A4BA0" size={25}
            />
            <TextInput
                placeholder="Search Products or store"
                style={styles.input}
                placeholderTextColor='#8891A5'
            />
        </View >
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        height: 56,
        borderRadius: 28,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#153075",
    },
    searchIcon: {
        margin: 2,
        marginHorizontal: 15,
    },
    input: {
        color: '#8891A5',
        width: screenWidth * 0.8,
    },
})

export default SearchBox;