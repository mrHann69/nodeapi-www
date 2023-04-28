# Node API 

## this is a basic example of a REST API using pure nodejs modules


## HOW TO RUN

### 1. Clone the repository

```git
git clone https://github.com/mrHann69/nodeapi-www.git
```

### 2. Install dependencies ( local use)

```
npm install
```

### 3. Run the container
- build the image
```docker
sudo docker build -t nodeapi .
```
- run the container
```docker
sudo docker run --rm -it -p 5000:5000 --name endpoints nodeapi
```
### 4. Check the console

