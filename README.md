# Effective testing strategies

We need to build an application that is going to have a 3rd party integration with an API that provides information about cool gadgets like phones, iPads, etc.

## Functional requirements
Users are willing to spend their money on new cool gadgets so the want a website where they can click on a **recommend me something!!!** button, and the application will recommend any cool gadget from a existing catalogue of products

The catalog of products is retrieved using a 3rd party Rest API, the application will need to pick any random product from the whole list and return it the user that is wanting to buy a new cool product

## Technical requirements
- Make sure to build the app using a TDD approach to ensure you cover as much code as possible

- Avoid excessive calls to the external API as they are expensive in terms of money

- Prepare for the future, as we might want to support new cool things in the app

- Data from the API will be returned using the following JSON format

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
