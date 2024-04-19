import { program } from 'commander';
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} from './contacts.js';

program
  .option(
    '-a, --action <type>',
    'choose action: list | get | remove | add | update'
  )
  .option('-i, --id <type>', 'contact id')
  .option('-n, --name <type>', 'contact name')
  .option('-e, --email <type>', 'contact email')
  .option('-p, --phone <type>', 'contact phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const dataArr = await listContacts();
      if (dataArr.length) {
        console.table(dataArr);
      } else {
        console.table('The file is empty');
      }
      break;

    case 'get':
      console.log(await getContactById(id));
      break;

    case 'remove':
      console.log(await removeContact(id));
      break;

    case 'add':
      console.log(await addContact({ name, email, phone }));
      break;

    case 'update':
      console.log(await updateContact({ id, name, email, phone }));
      break;

    default:
      console.warn('\x1b[31m Unknown action type!');
  }
}

invokeAction(argv);
