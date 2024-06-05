export class ProductService {

  getAvailableProducts() {
    return []
  }

  recommendMe() {
    this.getAvailableProducts()
    return {
      id: '1',
      name: 'iPad'
    }
  }
}
