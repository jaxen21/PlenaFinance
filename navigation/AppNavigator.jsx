import Home from "../screens/Home"
import Cart from "../screens/Cart"
import Favourites from '../screens/Favourites';
import ProductDetails from '../screens/ProductDetails';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Cart: Cart,
        Fav: Favourites,
        ProductDetails: ProductDetails,
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);
