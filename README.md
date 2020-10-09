# mulu-test
A test app for matching agents and contacts


## Information

1. I have added some predefined static users (both type) in the database
2. Assuming only Agents will login
3. The logged in Agent will get the contacts matched to it by a particular distance


## Your machine must have:

1. node
2. nodemon: https://www.npmjs.com/package/nodemon
3. mongo

## Run app by:

1. go to the root directory and run
  - npm i

2.start express server by:
  - npm run start-server

3. start the react app frontend server
  - npm start

## Steps to browse the app

1. Login in the app from the provided Agents credentials.
  - you can get the credentials from file './server/configs/data
  - in this you can get all credentials from the 'credentials' array
  - agent username: agent001
  - agent password: 1234567 
 
2. User Screen: You will get the logged in Agent(user) details on the screen
3. Hit the button 'Get Matched Contacts'
4. This will redirect to the Matched List page, where you can see the matched users list. Whose logic is implemented on backend(Node JS)
  - By default I have set the radial distance to 50 miles
  - you can change this either from frontend code
  - or by updating the distance(50) params in the browser url (matched listed page)
  - then hit enter

## 3rd Party libraries used:

1.	Zip Code Lookups: for main algorithm
2.	axios: for api callings

# Build and Test
TODO: Describe and show how to build your code and run the tests. 
