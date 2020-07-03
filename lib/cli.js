const elapsed = require('elapsed-time-logger')
const ora = require('ora')

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

module.exports = async (argvs) => {
  // npx create-simple-boilerplate name_folder
  console.log('argvs', argvs) // ['name_folder']
  const timer = elapsed.start()
  const spinner = ora(`Downloading...`).start()

  await sleep(2000)

  spinner.succeed(`${timer.get()}. Have fun!`)
}
