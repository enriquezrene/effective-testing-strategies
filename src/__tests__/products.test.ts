import { Gadget, ProductService } from '../product-service';

describe('When recommend me is executed', () => {

  const findAvailableProductsFunction = jest.spyOn(ProductService.prototype, 'getAvailableProducts')
  const availableProducts: Gadget[] = [{
    id: '1',
    name: 'Apple iPad'
  }, {
    id: '2',
    name: 'Google Pixel'
  }]
  findAvailableProductsFunction.mockImplementation(() => Promise.resolve(availableProducts))
  let recommendedGadget: Gadget

  beforeAll(async () => {
    recommendedGadget = await new ProductService().recommendMe()
  })

  it('the recommended gadget is an element from the array of available products', () => {
    expect(availableProducts.includes(recommendedGadget)).toBe(true)
  })

  it('it returns a gadget', () => {
    expect(recommendedGadget).toEqual({
      id: expect.any(String),
      name: expect.any(String)
    })
  })

  it('it gets a list of all the available products', () => {
    expect(findAvailableProductsFunction).toHaveBeenCalled()
  })

})
