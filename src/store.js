// Importing Necessary Functions and Files
import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore from @reduxjs/toolkit
import cartReducer from './CartSlice'; // Importing the cartReducer from CartSlice.jsx

// Configuring the Store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Assigning cartReducer to the cart slice of the state
    },
});

// Exporting the Store
export default store; // Exporting the configured store for use in the application
