import { getProducts } from '@/entities/product/api/getProducts';
import styles from './page.module.scss'
import { ProductCard } from '@/entities/product/ui/ProductCard';
export default async function Home() {

  const products = await getProducts(12);

  return (
    <div className={styles.page}>
      <h2>Latest Products</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
