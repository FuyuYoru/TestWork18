import { IProduct } from "@/entities/product/model/model";
import { ApiPaths, baseURL } from "@/shared/api/apiPaths"

interface ProductResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}

export const getProducts = async (limit: number = 0, skip: number = 0): Promise<IProduct[]> => {
    try {
        const response = await fetch(baseURL + ApiPaths.getProducts(limit, skip), {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch products. Status: ${response.status}`);
        }

        const json: ProductResponse = await response.json();
        return json.products;
    } catch {
        throw new Error('Unable to load products at this time.');
    }
};