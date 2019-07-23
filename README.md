# Node-CRUD restful
A simple restful NodeJS CRUD, with expressJS and mongoDB.

## Resources

- Node.Js
- Express.Js
- MongoDb
- Mongoose
- Postman
- BodyParser

## Routes

|          ROUTE            |       HTTP        |      DESCRIPTION      | 
| ------------------------- | ----------------- | --------------------- | 
| /api/                     |       GET         | Main page             | 
| /api/products             |       GET         | Show all products     | 
| /api/products/:product_id |       GET         | Show by id            | 
| /api/products/:product_id |       PUT         | Update product by id  |    
| /api/products/:product_id |       DELETE      | Delete product by id  |

## Running

```
git clone https://github.com/vitor-veras/node-crud-rest.git
```
 go to directory and run, this will install all dependencies for the project.
```
npm install
```
Then run API with:
```
npm run dev
```

If your db is local you'll have to run it:
```
mongod
```


## Author

* **Vitor Veras de Moura** - [GitHub](https://github.com/vitor-veras) - Email: vitorverasm@gmail.com
