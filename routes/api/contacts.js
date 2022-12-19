const express = require('express')

const router = express.Router()
const Joi = require('joi');

router.get('/', async (req, res, next) => {
  res.status(200).json({ contacts, message: 'Contact list' })

})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

  const result = schema.validate(req.body)
  if (result.error) {
  return res.status(400).json({ message: result.error.details})
  }
      const {
    name,
    email,
    phone,
  } = req.body
  
  contacts.push({
    id:Math.random().toFixed(2),
    name,
    email,
    phone,
  })
  res.status(201).json({ contacts, message: 'New contact was created' })


router.delete('/:contactId', async (req, res, next) => {
  contacts = contacts.filter(contact => contact.id !== req.params.contactId)
  const contact = contacts.find(contact => contact.id === req.params.contactId)
  if (!contact) {
    
    return res.status(404).json({ message: 'Contact not found' })
   }
  res.status(200).json({ message: 'Deleted!' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
