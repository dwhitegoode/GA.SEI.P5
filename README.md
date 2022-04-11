### Planets API

A RESTful API using Javascript, Express, and Mongoose the displays information about our solar system. 
___
#### Clone Repo
`git clone https://github.com/forextroll/GA.SEI.P5.git` 

#### Install Dependencies
`npm install`

#### Seed Data
`npm run db:seed`

#### Start Server
`npm start`


#### Heroku Deployment
`https://still-earth-57626.herokuapp.com/`

#### API Endpoints

| Method   |      Endpoint      |  Description |
|----------|:------------------:|-----------------:|
| GET |      /api        |         root      |
| GET |    /api/planets   |   gets all planets |
| GET | /api/planets/{name of planet} |    gets a single planet |
| POST |    /api/planets   |   posts a planet |
| PUT | /api/planets/:planet |    updates a planet |
| DEL |    /api/planets/:planet   |   deletes a planet |

