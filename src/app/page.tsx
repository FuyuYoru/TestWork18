import { getProducts } from '@/entities/product/api/getProducts';
import styles from './page.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { IProduct } from '@/entities/product/model/model';

export default async function Home() {
  let products: IProduct[] = [];

  try {
    products = await getProducts(12);
  } catch (error) {
    console.error('Failed to load products:', error);
  }

  return (
    <div className={styles.page}>
      <h3>Latest Products</h3>
      <div className={styles.productGrid}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Failed to load products.</p>
        )}
      </div>
    </div>
  );
}
