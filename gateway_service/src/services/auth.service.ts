
const authService = {
    async login(credentials: any) {
        setTimeout(async() => {console.log("waited!")}, 5000);
        return { data: credentials };
    }
}

export default authService;