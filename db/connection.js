import mongoose from "mongoose";
import chalk from "chalk";

const MONGODB_URI = process.env.PROD_DB || 'mongodb://localhost/solor-system'

mongoose.set('returnOriginal', false)

mongoose.connect(MONGODB_URI).catch(error =>
  console.log("Unable to establish mongoDB connection:", error.message)
)

mongoose.connection.on('disconnected', () =>
  console.log(chalk.bgBlue('Disconnected from MongoDB!'))
)

mongoose.connection.on('error', error =>
  console.error(chalk.red(`MongoDB connection error: ${error}`))
)

export default mongoose.connection




