import { instance } from "./config.js";

const AuthService = {
    initiation () {
        return instance.post("/api/initiation")
    },
    registration (email, password) {
        return instance.post("/api/registration", {email, password})
    },
    login (login, password) {
        return instance.post("/api/auth", {login, password})
    },

    refreshToken() {
        return instance.get("/api/refresh");
    },

    logout() {
        return instance.post("/api/logout")
    }
}
export default AuthService;
