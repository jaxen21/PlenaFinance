import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { CartProvider } from "./contexts/CartContext"
import { FavoriteProvider } from './contexts/FavouriteContext';

export default function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </FavoriteProvider>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
