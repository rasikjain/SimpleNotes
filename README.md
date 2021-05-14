# SimpleNotes

This App is built using React, TypeScript, Node.js, GraphQL, Apollo-server-express, MongoDB, Typegoose, Mongoose

## Steps to Run the Application

Fork the code from **[Simple Notes](https://github.com/rasikjain/SimpleNotes)** repo to your workstation.

 ### Mongo Database Setup
 - Sign-up for database at [MongoDB](https://account.mongodb.com/account/login)
 - Create a database and cluster called **notes**
 - Create a **database user** and provide access to **notes** cluster/db
 - Allow **Network access** to your database from your workstation/client **IP Address**.
 
 ### Server setup
 
 - Use the command/shell and go to the **Server** folder (`cd Server`)
 - Create **.env** file and enter mongodb (**`username`**, **`password`**) and **`server listening port`** information.
 - Run `npm install` command to install npm modules and packages.
 - Run `npm start` to start the server. You will see a message on command window about the **running** status.
 - Go to http://localhost:3333/graphql and you will be able to execute **GraphQL queries**
 - 
 ### Client setup
 - Use the command/shell and go to the **Client** folder (`cd Client`)
 - Create **.env** file and enter **`listening port`** information.
 - Run `npm install` command to install npm modules and packages.
 - Run `npm run codegen` if you are making changes to graphql schema. (optional)
 - Run `npm start` to start the server. You will see a message on command window about the running status.
 - Go to http://localhost:3000 and you will be able to create simple notes.
 

Enjoy the App and provide the feedback at [@jainrasik](https://twitter.com/jainrasik) or open git PR
