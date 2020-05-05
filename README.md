# Below are the commands used to create the project

>  use  `--save` to include these in the package.json.

>  use  `--save-dev` ó `-D` to include packets but as development dependencies.

Start the npm package.json

    npm init -y

Express and MongoDB () installation

    npm install express mongodb --save

Babel installation

    npm install --save-dev @babel/core @babel/cli @babel/preset-env
    npm install --save @babel/polyfill

Babel-Node installation

    npm install --save-dev @babel/node
    
 # MongoDB must be pre-installed
 
 # Endpoints
  
>Read (GET): /http://localhost:3000/appointments
>Read single (GET): /http://localhost:3000/appointment/{id}
>Create (POST): /http://localhost:3000/appointment/
>Update (PUT): /http://localhost:3000/appointment/{id}
>Delete (DELETE): /http://localhost:3000/appointment/{id}

