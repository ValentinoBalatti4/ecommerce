const mongo = require('mongoose')


const cartSchema = mongo.Schema({
    userId: { type: String, required: true },
    products: [
            {
                productId: { type: String },
                quantity: { type: Number, default: 1},
            }
        ]
    }, {timestamps: true}
)


module.exports = mongo.model("Cart", cartSchema)