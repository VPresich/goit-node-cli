This program is a command-line interface (CLI) tool for managing contacts.
It allows users to perform various actions on contacts stored in a JSON file.
The available actions are:

List: View all contacts.
Get: Retrieve a contact by its ID.
Remove: Delete a contact by its ID.
Add: Add a new contact with a name, email, and phone number.


Copy to terminal for testing:

1. Add
node index --action add -n Mango -e mango@gmail.com -p 322-22-22
node index -a add -n Mango -e mango@gmail.com -p 322-22-22

npm start -- --action add -n Mango -e mango@gmail.com -p 322-22-22
npm start -- -a add -n Mango -e mango@gmail.com -p 322-22-22

2. Remove (change index value)
node index --action remove -i 1
node index -a remove -i 1

npm start -- --action remove -i 1
npm start -- -action remove -i 1

3. Get by id (change index value)
node index --action get --id 1
node index -a get --id 1

npm start -- --action get --id 1
npm start -- -a get --id 1

4. Get list
node index --action list
node index -a list

npm start -- --action list
npm start -- -action list

5. For help
node index --help
node index -h

npm start -- --help
npm start -- -h