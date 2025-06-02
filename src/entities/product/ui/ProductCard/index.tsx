'use client';

import { useAuthStore } from '@/features/auth/model/authStore';
import { useState } from 'react';
import { IProduct } from '@/entities/product/model/model';
import styles from './index.module.scss'
import { Price } from '@/entities/product/ui/Price';

export const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
    const { isAuthenticated } = useAuthStore();
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={styles.productCard}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={product.thumbnail} alt={product.title} className="" />
            <h3>{product.title}</h3>
            <span
                style={{
                    color: '#8391a9'
                }}
            >
                {product.category.toUpperCase()}
            </span>
            <span
                style={{
                    color: '#ce0000'
                }}
            >
                ${product.price}
            </span>
            {/* {isAuthenticated && hovered && (
                <button className="">
                    Add to cart
                </button>
            )} */}
        </div>
    );
};
