// // const fs = require('fs/promises')

// const listContacts = async () => {}

// const getContactById = async (contactId) => {}

// const removeContact = async (contactId) => {}

// const addContact = async (body) => {}

// const updateContact = async (contactId, body) => {}

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// }
const {Schema, model} = require("mongoose");
const Joi = require("joi");


const userSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    email: {
      type: String,
      // required: [true, "price must be exist"],
        required: true,
        // min: 0.01
    },
    phone: {
        type: Number,
        required: true,
        minlength: 2,
        maxlength: 10
  },
    favorite: {
        type: Boolean,
        default: true
    },

}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().alphanum().min(2).max(10).required(),
    email: Joi.string().email({minDomainSegments: 2,tlds: { allow: ['com', 'net'] }
      }).required(),
  phone: Joi.number().min(7).required(),
    favorite: Joi.bool(),
    // status: Joi.string().valid("basic", "sale", "stock"),
    // code: Joi.string().pattern(codeRegexp)
});

// const statusJoiSchema = Joi.object({
//     status: Joi.string().valid("basic", "sale", "stock").required()
// })

const Contact = model("contact", userSchema);

module.exports = {
    Contact,
    joiSchema,
    // statusJoiSchema
}

//   const result = schema.validate(req.body)
//   if (result.error) {
//   return res.status(400).json({ message: result.error.details})
//   }
//       const {
//     name,
//     email,
//     phone,
//   } = req.body
  
//   contacts.push({
//     id:Math.random().toFixed(2),
//     name,
//     email,
//     phone,
//   })
//   res.status(201).json({ contacts, message: 'New contact was created' })
// })