import { createContext, useState } from "react";
//import { createUserDocFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

import PRODUCTS from "../shopData.json"
//as the actual value to access
export const ProductContext = createContext({
    product: [],
    setProduct: () => null
});


export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(PRODUCTS)
    const value = { product, setProduct };

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>

}