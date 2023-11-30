
const authService = {
    async login(credentials: any) {
        setTimeout(() => {console.log("waited!")}, 5000);
        return { data: credentials };
    },

    async register(userData: any) {
        setTimeout(() => {console.log('waited!')}, 5000);
        return { data: userData }
    }
}

export default authService;