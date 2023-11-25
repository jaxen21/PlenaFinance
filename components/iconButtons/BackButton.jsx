import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = ({ onPressHandler }) => {
    return (
        <TouchableOpacity onPress={onPressHandler}>
            <Ionicons name="chevron-back-outline" color="#1E222B" size={25} />
        </TouchableOpacity>
    )
}
export default BackButton;