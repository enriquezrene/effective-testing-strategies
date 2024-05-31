class ProductService {
  recommendMe() {
    return {
      id: 1,
      name: 'iPad'
    }
  }
}

it('When recommendMe is executed, it returns a gadget', ()=>{
  const recommendedGadget = new ProductService().recommendMe()

  expect(recommendedGadget).toEqual({
    id: expect.any(Number),
    name: expect.any(String)
  })
})