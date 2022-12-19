const path = require("path")
const fs = require("fs").promises
const contactsPath = path.resolve("./contacts.json")

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    return console.table(result.find(contact => (contact.id = contactId)))
    } catch (error) {
    console.log(error);
  }
}

const removeContact = async (contactId) => {
   try {
        const data =await fs.readFile(contactsPath);
    const result =JSON.parse( data);
        const findDelete = result.findIndex(contact=>contact.id === contactId)
        result.splice(findDelete, 1)
        await fs.writeFile(contactsPath, JSON.stringify(result))
        console.table(result)
    } catch (error) {
    console.log(error);
        
    }
}

const addContact = async ({name, email, phone}) => {
  try {
    const data =await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    const newContact = { name, email, phone}
    result.push(newContact)

    await fs.writeFile(contactsPath, JSON.stringify(result))
return
} catch (error) {
    console.log(error);

}
}

const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
