const fs = require('node:fs/promises');
const path = require('node:path');
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, 'contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    return contacts.find(contact => contact.id === contactId) || null;
  } catch (error) {
    return null;
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index !== -1) {
      const removedContact = contacts.splice(index, 1)[0];
      await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
      return removedContact;
    }
    return null;
  } catch (error) {
    return null;
  }
}

async function addContact(name, email, phone) {
  try {
    const newContact = { id: uuidv4(), name, email, phone };
    const contacts = await listContacts();
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    return null;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
