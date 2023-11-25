import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
    favoriteItems: [],
    addToFavorites: () => { },
    removeFromFavorites: () => { },
});

export const FavoriteProvider = ({ children }) => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    const addToFavorites = (itemToAdd) => {
        setFavoriteItems((prevFavorites) => [...prevFavorites, itemToAdd]);
    };

    const removeFromFavorites = (itemToRemove) => {
        setFavoriteItems((prevFavorites) =>
            prevFavorites.filter((item) => item.id !== itemToRemove.id)
        );
    };

    const favoriteContextValue = {
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
    };

    return (
        <FavoriteContext.Provider value={favoriteContextValue}>
            {children}
        </FavoriteContext.Provider>
    );
};
