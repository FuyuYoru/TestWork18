export const baseURL = "https://dummyjson.com";

export class ApiPaths {
    static signIn() {
        return "/auth/login"
    }

    static refreshToken(){
        return "/auth/refresh"
    }
}