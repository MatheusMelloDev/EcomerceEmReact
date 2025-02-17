import React from "react";
import { ProductType } from "../../../types/ProductsTypes";
import ProductCardMUI from "./ProductCardMUI";

interface ProductListProps {
  products: ProductType[];
  quantities: { [key: number]: number };
  onIncreaseQuantity: (productId: number) => void;
  onDecreaseQuantity: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  quantities,
  onIncreaseQuantity,
  onDecreaseQuantity
}) => {
  return (
    <div className="listContainer">
      {products.map((product) => (
        <div className="productContainer" key={product.id}>
          <ProductCardMUI
            prod={product}
            quantity={quantities[product.id] || 0}
            onIncreaseQuantity={() => onIncreaseQuantity(product.id)}
            onDecreaseQuantity={() => onDecreaseQuantity(product.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
