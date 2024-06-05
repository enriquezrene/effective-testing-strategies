import { Gadget, ProductService } from '../product-service';

describe('When recommend me is executed', () => {

  const findAvailableProductsFunction = jest.spyOn(ProductService.prototype, 'getAvailableProducts')
  findAvailableProductsFunction.mockImplementation(() => Promise.resolve([{
    id: '1',
    name: 'Apple iPad'
  }, {
    id: '2',
    name: 'Google Pixel'
  }]))
  let recommendedGadget: Gadget

  beforeEach(async () => {
    recommendedGadget = await new ProductService().recommendMe()
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
