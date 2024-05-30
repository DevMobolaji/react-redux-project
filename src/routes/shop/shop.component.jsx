import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../component/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = ()=> {
    const { product } = useContext(ProductContext)

    return (
        <div className="product-container">
            {product.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))
            }
        </div>
    )
}

export default Shop;