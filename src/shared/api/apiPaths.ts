export const baseURL = "https://dummyjson.com";

export class ApiPaths {
    static signIn() {
        return "/auth/login"
    }

    static refreshToken(){
        return "/auth/refresh"
    }

    static getMe() {
        return "/auth/me"
    }

    static getProducts(limit:number, skip: number) {
        return `/products?limit=${limit}&skip=${skip}&select=title,price,category,thumbnail`
    }
}