module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
  
      product_name: {
        type: DataTypes.TEXT,
        required: true
      },
      product_brand: {
        type: DataTypes.STRING,
        required: true
      },
      product_price: {
        type: DataTypes.DECIMAL,
        required: true
      },
      product_shade: {
        type: DataTypes.STRING,
        required: false
      },
      product_type: {
        type: DataTypes.STRING,
        required: true,
        defaultValue: false
      }
    });
    console.log(Product);
    return Product;
  };