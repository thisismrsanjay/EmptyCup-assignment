## DEMOSTRATION  VIDEO 

🎥 :  https://youtu.be/ODrfiCz9B48

## In line with my assignment, I've ensured that the UI is responsive. 

## To mimic a mobile interface using the screen size settings in inspect menu.

## Deployement 

Server  (AWS)  : https://jjk6hz2kxi.execute-api.us-west-2.amazonaws.com/listings

Frontend (gh-pages)- https://thisismrsanjay.github.io/EmptyCup-assignment/index3.html 

<hr>


These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/) (Included with Docker Desktop on Windows and Mac)

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

1. **Clone the Repository**

    ```
    git clone https://github.com/thisismrsanjay/EmptyCup-assignment
    cd EmptyCup-assignment
    ```

2. **Build and Run with Docker Compose**

    This command will build the Docker images for both the frontend and backend services and start the containers.

    ```
    docker-compose up --build
    ```

    To run the containers in the background, add the `-d` flag:

    ```
    docker-compose up --build -d
    ```

3. **Accessing the Application**

    - The Flask application will be accessible at `http://localhost:5000`.
    - In order to get all listings `http://localhost:5000/listings`.
    - The frontend application will be accessible at `http://localhost/index3.html`.
    -  `index.html` contains only UI
    - `index2.html` contains backend in Flask
    - `index3.html` contins backend along with MongoDB database 

4. **Stopping the Containers**

to stop the containers, run:
```
docker-compose down
```

<hr/>


# DEMO Iterative 




## 1.  Responsive Replica of  single mobile web page. 📲
### Compared to figma 
### Only UI is in : 
<img src="./first.png" >

## 2.   Shortlist Functionality ⚙️
###Video Demo : wait few seconds to load video



https://github.com/thisismrsanjay/EmptyCup-assignment/assets/37665041/58516fa1-f5f2-4025-87f9-7460d3b622d4


## 3.  Server 🖥️

### 3.1 .  Flask Server  at port 5000  + feaching in frontend + ShortlistFunctionality 
#### Flask Server Demo : wait few seconds to load video



https://github.com/thisismrsanjay/EmptyCup-assignment/assets/37665041/ee2f9820-2cd0-4849-bdcd-f50df708670d


 
### 3.2 .  MongodDb database + Flask Server  at port 5000  + feaching in frontend + ShortlistFunctionality 
#### Fetching from DB: wait few seconds to load video or please check recording 4
#### Demo showcasing data on cloud also altering database data changes the frontend 


https://github.com/thisismrsanjay/EmptyCup-assignment/assets/37665041/7903abc2-7941-49db-aa0b-3d551483815b


## 4. Deployment 🌐

4.1 Docker Deplyed Demo




https://github.com/thisismrsanjay/EmptyCup-assignment/assets/37665041/0b52c0e7-3290-481f-968a-d75024aa986c

4.2 Deployed on AWS 

listings-endpoint : https://jjk6hz2kxi.execute-api.us-west-2.amazonaws.com/listings
frontend  : https://thisismrsanjay.github.io/EmptyCup-assignment/index3.html 

## Contact me 

📧 :  cs22m111@iittp.ac.in
📱 :  +91-7987554572
