# Home work mock server

This mock server is built by [json-server](https://github.com/typicode/json-server). All the mocked data are put in file `db.json`.

Please use this mock server as the back end server of your homework. You can use this project as mock server directly, or you can integrate this mock server into your own project.

Of course, if you think anything in this mock server is not OK for you, you can absolutely change this server to help you finish your homework.

## Start mock server

Please clone or download this project to your local, and use `npm` or `yarn` to install the dependences and start server:

```
npm install
npm start
```

Or

```
yarn install
yarn start
```

Then you can access `http://localhost:3001/projects/` to see if the server is started correctly.

## APIs

You can refer the document of [json-server](https://github.com/typicode/json-server) to see the full APIs.

Also here are some APIs you might want to use:

### Get projects list

```
GET http://localhost:3001/projects
```

The response of this request would be the json of all agents list.

### Get one project

```
GET http://localhost:3001/projects/{id}
```

The response of this request would be the json of the agent which match the id.

### Change one project

```
PUT http://localhost:3001/projects/{id}
{
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {MODIFIED PROJECTS}
}
```

The `body` parameter is a json of the modified agent, here is an example:

```
"body": {
      "name": "Smart Cities Batch 4 Program in China",
      "teaser": "This is the project teaser.",
      "image": "https://via.placeholder.com/150",
      "type": "Investment",
      "deadline": "5-5-2012",
      "applications": 2,
      "id": 8
    }
```
