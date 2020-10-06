const elapsed = require('elapsed-time-logger');
const ora = require('ora');
const path = require('path');
const fs = require('fs-extra');
const { extract } = require('pacote');

const PACKAGE_NAME = 'simple-layout-boilerplate';
const PACKAGE_NAME_WITH_VERSION = `${PACKAGE_NAME}@latest`;

module.exports = async (argvs) => {
  const timer = elapsed.start();
  const spinner = ora(`Downloading...`).start();
  console.log('argvs', argvs); // ['name_folder']
  const targetDir = path.resolve('./');
  const userNameDir = argvs[0];

  console.log('targetDir', targetDir);

  await fs.ensureDir(`${targetDir}/${userNameDir}`);

  try {
    const r = await extract(PACKAGE_NAME_WITH_VERSION, userNameDir, {});
    console.log('r', r);
  } catch (err) {
    spinner.fail('Unexpected error');
    throw new Error(err);
  }

  spinner.succeed(`${timer.get()}. Have fun!`);
};
