import { environment } from '../config/environment.js';

export class ApiClient {
  constructor(request) { this.request = request; }
  getProducts() { return this.request.get(`${environment.apiBaseURL}/productsList`); }
  getBrands() { return this.request.get(`${environment.apiBaseURL}/brandsList`); }
  searchProducts(term) {
    return this.request.post(`${environment.apiBaseURL}/searchProduct`, { form: { search_product: term } });
  }
}
