# Effective testing strategies

We need to build an application that will integrate with a third-party API providing information about cool gadgets like phones, iPads, etc.

## Functional requirements
Users are eager to spend their money on new, cool gadgets, so they want a website where they can click on a **recommend me something!!!**  button. The application will then recommend a cool gadget from an existing catalog of products.

The catalog of products is retrieved using a third-party REST API. The application will need to pick a random product from the entire list and return it to the user who is looking to buy a new, cool product.

## Technical requirements
- Make sure to build the app using a TDD approach to ensure you cover as much code as possible.
- Avoid excessive calls to the external API, as they are expensive in terms of cost.
- Prepare for the future, as we might want to support new cool features in the app.
- Data from the API will be returned using the following JSON format:

```json
[
   {
      "id": "1",
      "name": "Product name 1",
      "data": {
         "featureOneName": "feature one description",
         "featureTwoName": "feature two description"
      }
   },
   {
      "id": "2",
      "name": "Product name 2",
      "data": null
   }
]
```
