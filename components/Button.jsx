import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, style, title, textStyle, invert }) => {
    const buttonStyles = [
        styles.button,
        style,
        invert ? styles.invertedButton : null,
    ];

    const textStyles = [
        styles.buttonText,
        textStyle,
        invert ? styles.invertedButtonText : null,
    ];

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        width: 150,
        borderWidth: 1,
        backgroundColor: "#2A4BA0",
        borderColor: "#2A4BA0",
    },
    invertedButton: {
        backgroundColor: "#FFFFFF",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    invertedButtonText: {
        color: "#2A4BA0",
    },
});

export default Button;