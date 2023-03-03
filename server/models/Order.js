const mongo = require('mongoose')

const orderSchema = mongo.Schema(
    {
        userId: { type: String, required: true},
        products: [
            {
                productId: { type: String },
                quantity: { type: Number, default: 1},
            },
        ],
        amount: { type: Number, require: true },
        address: { type: Object, required: true},
        status: { type: String, default: "pending"}
    }, { timestamps: true}
)


module.exports = mongo.model("Order", orderSchema)