/* eslint-disable no-console */
const util = require("util");
const fs = require("fs-extra");
const fsCopy = util.promisify(fs.copy);
const fsRename = util.promisify(fs.rename);
const fsRemove = util.promisify(fs.remove);
const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);

const [, , action, arg1, arg2, arg3] = process.argv;

// check required arguments
if (!action || Number(action) > 0) {
  throw new Error("Invalid action provided, please use 'add', 'copy' or 'rm'.");
}
if (!arg1 || !(Number(arg1) > 0)) {
  throw new Error("Invalid num provided.");
}

const rootPath = "./src/";

// helper functions
function getTitleByNum(targetNum) {
  const targetFilename = fs
    .readdirSync(rootPath)
    .filter((file) => file.indexOf(`${targetNum}.`) === 0);
  if (targetFilename) {
    return targetFilename[0].split(".")[1];
  }
  console.warn("[read file] can't find target file");
  return "";
}

function getFolderByNum(path, targetNum) {
  const targetFilename = fs.readdirSync(path).filter((file) => file.indexOf(`${targetNum}.`) === 0);
  if (!(targetFilename && targetFilename.length > 0)) {
    console.warn("[read file] can't find target file");
    return "";
  }
  return `${path}${targetFilename}`;
}

async function removeFile(path) {
  try {
    await fsRemove(path);
    console.log(`remove '${path}' success!`);
  } catch (e) {
    console.error(e);
  }
}

// action handlers
async function remove(targetNum) {
  const target = getFolderByNum(rootPath, targetNum);
  if (!target) {
    console.warn("Wrong target path.");
    return;
  }
  await removeFile(target);
}

async function add(targetNum, targetTitle) {
  if (!(targetNum > 0 && targetTitle.length > 0)) {
    throw new Error("Invalid title or number provided: ", targetNum, targetTitle);
  }
  const templateFolder = `${rootPath}template`;
  const targetProblem = `${targetNum}.${targetTitle}`;
  const targetFolder = `${rootPath}${targetProblem}`;
  const expectedSrcFile = `${targetFolder}/${targetProblem}.js`;
  const expectedTestFile = `${targetFolder}/${targetProblem}.spec.js`;
  try {
    await fsCopy(templateFolder, targetFolder);
    await fsRename(`${targetFolder}/template.js`, expectedSrcFile);
    await fsRename(`${targetFolder}/template__test.js`, expectedTestFile);

    const data = await fsReadFile(expectedTestFile, "utf8");
    const updatedData = data.replace(/\$\$_title/g, targetTitle).replace(/\$\$_num/g, targetNum);
    await fsWriteFile(expectedTestFile, updatedData);
    console.log(`added template problem set for ${targetFolder}.`);
  } catch (e) {
    console.error("Encountered error during add: ", e);
  }
}

async function copy(refNum, targetNum, targetTitle) {
  if (!(refNum && refNum > 0)) throw new Error("Invalid reference number provided.");
  if (!(targetNum > 0 && targetTitle.length > 0)) {
    throw new Error("Invalid title or number provided: ", targetNum, targetTitle);
  }

  const targetProblem = `${targetNum}.${targetTitle}`;
  const targetFolder = `${rootPath}${targetProblem}`;
  const expectedSrcFile = `${targetFolder}/${targetProblem}.js`;
  const expectedTestFile = `${targetFolder}/${targetProblem}.spec.js`;
  const refTitle = getTitleByNum(refNum);
  const refProblem = `${refNum}.${refTitle}`;
  const refFolder = getFolderByNum(rootPath, refNum);

  try {
    await fsCopy(refFolder, targetFolder);
    await fsRename(`${targetFolder}/${refProblem}.js`, expectedSrcFile);
    await fsRename(`${targetFolder}/${refProblem}.spec.js`, expectedTestFile);

    const data = await fsReadFile(expectedTestFile, "utf8");
    const updatedData = data
      .replace(`Problem ${refNum}`, `Problem ${targetNum}`)
      .replace(refProblem, targetProblem);

    await fsWriteFile(expectedTestFile, updatedData);
    console.log(`Copied ${refFolder} problem to ${targetFolder}.`);
  } catch (e) {
    console.error("Encountered error during copy: ", e);
  }
}

const mapActionToExecutor = {
  rm: remove.bind(null, arg1),
  cp: copy.bind(null, arg1, arg2, arg3),
  add: add.bind(null, arg1, arg2),
};
const executor = mapActionToExecutor[action];
if (typeof executor !== "function") {
  throw new Error("Unknown action, please use 'add', 'copy' or 'rm'.");
}
executor();
