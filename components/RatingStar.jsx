import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RatingStar = ({ rating }) => {
    const roundedRating = Math.round(parseFloat(rating) * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;

    const stars = [];
    let remainingStars = 5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Ionicons name="star" key={i} size={17} color="#F9B023" />);
        remainingStars--;
    }

    if (hasHalfStar) {
        stars.push(<Ionicons key="half" name="star-half-outline" size={17} color="#F9B023" />);
        remainingStars--;
    }

    for (let i = 0; i < remainingStars; i++) {
        stars.push(<Ionicons key={`empty-${i}`} name="star-outline" size={17} color="#F9B023" />);
    }

    return (
        <View style={styles.starContainer}>
            {stars}
        </View>
    );
};

const styles = StyleSheet.create({
    starContainer: {
        marginLeft: "5%",
        marginTop: "5%",
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default RatingStar;
