import { ProductService } from '../product-service';

describe('When recommend me is executed', () => {

  const findAvailableProductsFunction = jest.spyOn(ProductService.prototype, 'getAvailableProducts')
  let recommendedGadget: any

  beforeAll(async () => {
    recommendedGadget = await new ProductService().recommendMe()
  })

  it('it returns a gadget', () => {
    expect(recommendedGadget).toEqual({
      id: expect.any(Number),
      name: expect.any(String)
    })
  })

  it('it gets a list of all the available products', () => {
    expect(findAvailableProductsFunction).toHaveBeenCalled()
  })

})
