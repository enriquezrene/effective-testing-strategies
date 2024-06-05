import { ProductService } from '../product-service';

describe('When recommendMe is executed', () => {

  let findAvailableProductsFunction: any
  let recommendedGadget: any

  beforeAll(() => {
    findAvailableProductsFunction = jest.spyOn(ProductService.prototype, 'getAvailableProducts')
  })

  it('it returns a gadget', () => {
    recommendedGadget = new ProductService().recommendMe()
    expect(recommendedGadget).toEqual({
      id: expect.any(String),
      name: expect.any(String)
    })
  })

  it('it gets a list of all the available products', () => {
    recommendedGadget = new ProductService().recommendMe()
    expect(findAvailableProductsFunction).toHaveBeenCalled()
  })

})
