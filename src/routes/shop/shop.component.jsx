import { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.controller';
import { ProductsContext } from '../../contexts/products.context';
import './shop.styles.scss';
function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Shop;
