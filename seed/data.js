import chalk from "chalk"
import db from "../db/connection.js"
import Planet from "../models/planet.js"
import planets from "./data.json" assert {type: 'json'}

const seedData = async () => {
  db.dropDatabase()

  await Planet.insertMany(planets)
  console.log(chalk.bgGreen('seeded'))
  db.close()
}

seedData();