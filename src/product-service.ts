export class ProductService {

  recommendMe() {
    this.getAvailableProducts()
    return {
      id: 1,
      name: 'iPad'
    }
  }
  getAvailableProducts() {
    return []
  }


}
