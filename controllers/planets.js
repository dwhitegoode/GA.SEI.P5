import chalk from "chalk"
import Planet from "../models/planet.js"

export const getPlanets = async (req, res) => {
  try {
    const planets = await Planet.find({})
    res.json(planets)

  } catch (error) {
    console.log(error)
    res.json({ error: error.message })
  }
}

export const getPlanet = async (req, res) => {
  try {
    const { planet } = req.params;
    console.log(planet)
    let filter = { name: planet }
    const searchResult = await Planet.findOne(filter)
    if (searchResult) {
      return res.json(searchResult)
    }
    res.status(400).json({ message: 'planet not found' })
  } catch (error) {
    res.json({ error: error })
  }
}

export const addPlanet = async (req, res) => {
  try {
    const planet = new Planet(req.body)
    await planet.save()
    res.json(planet)
  } catch (error) {
    res.json({ error: error })
  }
}

export const updatePlanet = async (req, res) => {
  try {
    const { id } = req.params
    const planet = await Planet.findByIdAndUpdate(id, req.body, { new: true })
    res.json(planet)
  } catch (error) {
    res.json({ error: error })
  }
}

export const deletePlanet = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Planet.findByIdAndDelete(id)
    if (deleted) {
      return res.send('planet removed')
    }
    throw new Error(chalk.red('planet not found'))
  } catch (error) {
    res.json({ error: error })
  }
}