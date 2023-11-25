import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddToCartIconButton = ({ onPressHandler }) => {
    return (
        <TouchableOpacity onPress={onPressHandler}>
            <Ionicons name="add-circle-sharp" color="#2A4BA0" size={24} />
        </TouchableOpacity>
    )
}
export default AddToCartIconButton;