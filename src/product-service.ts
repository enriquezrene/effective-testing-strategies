import axios from 'axios';

export class ProductService {

  async recommendMe(): Promise<Gadget> {
    const products = await this.getAvailableProducts()
    const randomIndex = Math.floor(Math.random() * (products.length - 1)) ;
    return products[randomIndex]
  }

  async getAvailableProducts(): Promise<Gadget[]> {
    const products = await axios.get(`https://api.restful-api.dev/objects`)
    return products.data
  }

}


export type Gadget = {
  id: string,
  name: string,
  data?: any
}