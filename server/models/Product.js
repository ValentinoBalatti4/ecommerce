const mongo = require('mongoose')


const productSchema = mongo.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        img: { type: String, required: true},
        categories: {type: Array},
        size: { type: Array },
        color: { type: Array },
        price: { type: String, required: true },
        inStock: { type: Boolean, default: true}
    }, 
    { timestamps: true }
)


module.exports = mongo.model("Product", productSchema)