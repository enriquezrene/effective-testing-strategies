test('Return any product from the list when RECOMMEND ME is executed', () => {
  // test setup

  // function under testing execution
  const recommendedGadget = recommendMe()

  // expectations
  expect(recommendedGadget).toEqual({
    id: expect.any(Number),
    name: expect.any(String)
  })
})



function recommendMe() {
  return {
    id: 1,
    name: 'something'
  }
}