import { ProductService } from '../product-service';

it('When recommendMe is executed, it returns a gadget', () => {
  const recommendedGadget = new ProductService().recommendMe()

  expect(recommendedGadget).toEqual({
    id: expect.any(String),
    name: expect.any(String)
  })
})

it('When recommendMe is executed, it gets a list of all the available products', () => {
  // spies, jest built in feature
  const findAvailableProductsFunction = jest.spyOn(ProductService.prototype, 'getAvailableProducts')

  const recommendedGadget = new ProductService().recommendMe()

  expect(findAvailableProductsFunction).toHaveBeenCalled()
})