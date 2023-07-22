const { getProduct, getProducts } = require('./product.resolvers');


const resolvers = {
  Query: {
    hello: () => 'hola mundo',
    getPerson: (_, args) => `Hello, my name is ${args.name}, I'm ${args.age} year old!`,
    getInt: () => 1,
    getFloat: () => 1.1,
    getBoolean: () => true,
    getID: () => 121233231,
    // Product
    product: getProduct,
    products: getProducts

  }
}


module.exports = resolvers;

