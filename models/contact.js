const {Schema, model, SchemaTypes, } = require("mongoose");
const Joi = require("joi");


const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
        minlength: 2,
        maxlength: 10
    },
    email: {
      type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        minlength: 2,
        maxlength: 10
  },
    favorite: {
        type: Boolean,
        default: false
    },
     owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    }

}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().alphanum().min(2).max(10).required(),
    email: Joi.string().email({minDomainSegments: 2,tlds: { allow: ['com', 'net'] }
      }).required(),
  phone: Joi.number().min(7).required(),
    favorite: Joi.bool(),
});
const Contact = model("contact", userSchema);

module.exports = {
    Contact,
    joiSchema,
}