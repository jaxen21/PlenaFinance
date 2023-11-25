import React from "react"
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons";
const { width: screenWidth } = Dimensions.get('window');

const DeliveryBox = () => {
    return (
        <View style={styles.deliveryContainer}>
            <View>
                <Text style={styles.headingText}>Delivery to</Text>
                <TouchableOpacity>
                    <View style={styles.valueBox}>
                        <Text style={styles.textValue}>Green Way 3000, Sylhet</Text>
                        <Ionicons name="chevron-down-outline" color="#F8F9FB" />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.headingText}>Within</Text>
                <TouchableOpacity>
                    <View style={styles.valueBox}>
                        <Text style={styles.textValue}>1 Hour</Text>
                        <Ionicons name="chevron-down-outline" color="#F8F9FB" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    deliveryContainer: {
        display: "flex",
        flexDirection: "row",
        width: screenWidth * 0.9,
        justifyContent: "space-between",
    },
    headingText: {
        color: '#8891A5',
        textTransform: "uppercase"
    },
    valueBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    textValue: {
        color: "#F8F9FB",
        marginRight: 8
    },
})

export default DeliveryBox; "#F8F9FB"