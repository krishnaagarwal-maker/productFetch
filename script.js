class ProductService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async fetchProducts() {
        const response = await fetch(this.apiUrl);
        return response.json();
    }
}
    