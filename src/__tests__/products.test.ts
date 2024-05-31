import { ProductService } from '../product-service';

describe('When recommendMe is executed', ()=>{

  it('it returns a gadget', () => {
    const recommendedGadget = new ProductService().recommendMe()

    expect(recommendedGadget).toEqual({
      id: expect.any(Number),
      name: expect.any(String)
    })
  })

  it('it gets a list of all the available products', () => {
    // spies, jest built in feature
    const findAvailableProductsFunction = jest.spyOn(ProductService.prototype, 'getAvailableProducts')

    const recommendedGadget = new ProductService().recommendMe()

    expect(findAvailableProductsFunction).toHaveBeenCalled()
  })
})



