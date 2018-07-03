const fs = require("fs-extra");
const [, , action, num, title, copyNum] = process.argv;

// check required arguments
if (!action || Number(action) > 0) {
  throw `Invalid action provided, please use 'add', 'copy' or 'rm'.`;
  return;
} else if (!num || !(Number(num) > 0)) {
  throw `Invalid num provided.`;
  return;
}

const mapActionToHandler = {
  rm: remove.bind(null, num),
  cp: copy.bind(null, num, title, copyNum),
  add: add.bind(null, num, title),
};

// helper functions
function getTitleByNum(num) {
  const targetFilename = fs
    .readdirSync("./src/")
    .filter(file => file.indexOf(`${num}.`) === 0);

  if (!targetFilename) {
    console.warn(`[readdir] can't find target file to remove.`);
    return "";
  } else {
    return targetFilename[0].split(".")[1];
  }
}

function getFilePathByNum(path, num) {
  const targetFilename = fs
    .readdirSync(path)
    .filter(file => file.indexOf(`${num}.`) === 0);

  if (!targetFilename || !(targetFilename.length > 0)) {
    console.warn(`[readdir] can't find target file to remove.`);
    return;
  } else {
    return `${path}${targetFilename}`;
  }
}

// action handlers
function remove(num) {
  const removeProblem = dstPath => {
    fs.remove(dstPath, err => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`remove '${dstPath}'' success!`);
    });
  };

  const specDstPath = getFilePathByNum(`./test/spec/`, num);
  const solutionDstPath = getFilePathByNum(`./src/`, num);

  if (solutionDstPath && specDstPath) {
    removeProblem(solutionDstPath); // remove solution file
    removeProblem(specDstPath); // remove spec file
  } else {
    console.warn(`Wrong solutionDstPath, specDstPath.`);
    return;
  }
}

function copy(num, title, copyNum) {
  if (!copyNum || !(Number(copyNum) > 0)) {
    throw `Invalid copyNum provided.`;
    return;
  }

  const solutionDstPath = `./src/${num}.${title}`;
  const specDstPath = `./test/spec/${num}.${title}.spec.js`;
  const solutionSrcPath = getFilePathByNum(`./src/`, copyNum);
  const specSrcPath = getFilePathByNum(`./test/spec/`, copyNum);
  const copyTitle = getTitleByNum(copyNum);

  const copyProblemFrom = (srcPath, dstPath) => {
    fs.copy(srcPath, dstPath, err => {
      if (err) throw err;

      console.log(`${dstPath} - renamed copy complete.`);

      let filePath = dstPath;

      if (dstPath.includes("src") && !dstPath.includes("test/spec")) {
        filePath = dstPath + "/solution.js";
      }

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) throw err;

        const titleRegExp = new RegExp(copyTitle, "g");
        let updatedData = data
          .replace(titleRegExp, title)
          .replace(`Problem ${copyNum}`, `Problem ${num}`)
          .replace(`${copyNum}.`, `${num}.`);

        fs.writeFile(filePath, updatedData, err => {
          if (err) throw err;
          console.log(`updated ${filePath}`);
        });
      });
    });
  };

  copyProblemFrom(solutionSrcPath, solutionDstPath); // create solution file
  copyProblemFrom(specSrcPath, specDstPath); // create spec file
}

function add(num, title) {
  if (!title || Number(title) > 0) {
    throw `Invalid title provided, use proper char string as title.`;
    return;
  }

  const solutionSrcPath = `./src/template`;
  const solutionDstPath = `./src/${num}.${title}`;
  const specSrcPath = `./test/spec/template.js`;
  const specDstPath = `./test/spec/${num}.${title}.spec.js`;

  const createNewProblem = (srcPath, dstPath) => {
    fs.copy(srcPath, dstPath, err => {
      if (err) throw err;

      let filePath = dstPath;

      console.log(`${dstPath} - renamed copy complete.`);

      if (dstPath.includes("src") && !dstPath.includes("test/spec")) {
        filePath = dstPath + "/solution.js";
      }

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) throw err;

        let updatedData = data
          .replace(/\$\$\_title/g, title)
          .replace(/\$\$\_num/g, num);

        fs.writeFile(filePath, updatedData, err => {
          if (err) throw err;
          console.log(`updated ${filePath}`);
        });
      });
    });
  };

  createNewProblem(solutionSrcPath, solutionDstPath); // create solution file
  createNewProblem(specSrcPath, specDstPath); // create spec file
}

const handler = mapActionToHandler[action];
if (typeof handler !== "function") {
  throw `unknown action, please use 'add', 'copy' or 'rm'.`;
  return;
}

handler();
