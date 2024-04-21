A simplified project about categories and products


## Download Tools

- Download Nodejs ( node , npm , npx ) https://nodejs.org/en/download 
- Download Git https://git-scm.com/download/win
- Download Postman https://www.postman.com/downloads/


## Fast Startup

- Download and run application

```sh
    git clone https://github.com/AbduAllahGabbar/Fastify.git ## download source code
    cd Fastify ## to enter the project folder
    npm i ## install all libs
    npm run dev ## run application
```


## To Open MySQL DataBase Manager

- Open another terminal
- Run `npx prisma studio`
- manage your database from browser :  http://localhost:5555


## To Test API`S on postman

- open file `Fastify.postman_collection.json` in postman application


## Request Parameters [GET , POST | PUT | Delete] Restful API From Postman

- Api for `Categories`

  Method [POST] : `URL` http://localhost:3100/categories

  ```json
  
  // If the category is the top parent, put zero | "0" in "parentId" : "0"
  // If the category has a parent, the parent's ID must be placed in the "parentId"

  //Sample Body 
  {
    "name": "Category 1",
    "parentId": "0"
  }
  ```

  Method [GET] : `URL` http://localhost:3100/categories

  ```html
  Minor categories related with the parent are returned in the
  "nestedCategories" list
  ```

  ```html
  Parent category are returned in the "parentCategory"
  ```

  ```html
  Returns the number of products related with the category in the { "_count":
  {"products": 0} }
  ```


- Api for `Products`

  Method [POST] : `URL` http://localhost:3100/products

  ```json
  // You must put the ID of the category you want to associate with the product in "categoryId"
 
  //Sample Body 
  {
   "name" : "Product",
   "categoryId" : "1cf07109-6531-42d8-8d32-2fc3515fd64d"
  }
  ```
  Method [GET] : `URL` http://localhost:3100/products

  ```html
  To get products list
  ```
