import React from 'react';
import Swiper from 'react-native-swiper';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
    return (
        <Swiper
            showsButtons={true} autoplay={true} autoplayTimeout={2}
            activeDotColor='#F9B023' dotStyle={{ width: 20 }}
            activeDotStyle={{ width: 20 }}
        >
            {images?.map((image, index) => (
                <View key={index} style={styles.slide}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            ))}
        </Swiper>
    );
};

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
});

export default ImageCarousel;
