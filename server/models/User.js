const mongo = require('mongoose')


const userSchema = mongo.Schema({
    username: {
        unique: true,
        type: 'String',
    },
    email: {type: 'String'},
    password: {
        min: 4,
        type: 'String',
    },
    img: {type: String},
    phone: {type: 'Number'},
    address: {type: 'String'},
    isAdmin: { type: 'boolean', default: false}
}, { timestamps: true }
)


module.exports = mongo.model("User", userSchema)