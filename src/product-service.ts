import axios from 'axios';

export class ProductService {

  async recommendMe(): Promise<Gadget> {
    const products = await this.getAvailableProducts()
    // return a random product here
    return {
      id: '1',
      name: 'iPad'
    }
  }

  async getAvailableProducts(): Promise<Gadget[]> {
    const products = await axios.get(`https://api.restful-api.dev/objects`)
    console.log(products.data)
    return products.data
  }

}


export type Gadget = {
  id: string,
  name: string,
  data?: any
}