const fs = require("fs-extra"),
    action = process.argv[2],
    num = process.argv[3],
    title = process.argv[4],
    copyNum = process.argv[5];

if (!num || !action) {
    throw `invalid input(action / num) provided.`;
    return;
}


// public functions
function getTitleByNum(num) {
    let targetFilename = fs.readdirSync(`./src/`).filter(file => {
        return file.indexOf(`${num}.`) === 0;
    });

    if (!targetFilename) {
        console.warn(`[readdir] can't find target file to remove.`);
        return '';
    } else {
        return targetFilename[0].split('.')[1];
    }
}

function getFilePathByNum(path, num) {
    let targetFilename = fs.readdirSync(path).filter(file => {
        return file.indexOf(`${num}.`) === 0;
    });

    if (!targetFilename || !(targetFilename.length > 0)) {
        console.warn(`[readdir] can't find target file to remove.`);
        return;
    } else {
        return `${path}${targetFilename}`;
    }
}


// [action] - rm
if (action == "rm") {

    const removeProblem = (dstPath) => {
        fs.remove(dstPath, function(err) {
            if (err) {
                return console.error(err);
            }

            console.log(`remove '${dstPath}'' success!`)
        })
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

    // [action] - copy
} else if (action == "copy") {

    if (!copyNum) {
        throw `invalid input(copyNum) provided.`;
        return;
    }

    const solutionDstPath = `./src/${num}.${title}`;
    const specDstPath = `./test/spec/${num}.${title}.spec.js`;
    const solutionSrcPath = getFilePathByNum(`./src/`, copyNum);
    const specSrcPath = getFilePathByNum(`./test/spec/`, copyNum);
    const copyTitle = getTitleByNum(copyNum);

    const copyProblemFrom = (srcPath, dstPath) => {
        fs.copy(srcPath, dstPath, (err) => {
            if (err) throw err;

            console.log(`${dstPath} - renamed copy complete.`);

            let filePath = dstPath;

            if (dstPath.includes("src") && !dstPath.includes("test/spec")) {
                filePath = dstPath + "/solution.js";
            }

            fs.readFile(filePath, "utf8", (err, data) => {
                if (err) throw err;

                const titleRegExp = new RegExp(copyTitle, "g");
                let updatedData = data.replace(titleRegExp, title)
                    .replace(`Problem ${copyNum}`, `Problem ${num}`)
                    .replace(`${copyNum}.`, `${num}.`);

                fs.writeFile(filePath, updatedData, (err) => {
                    if (err) throw err;
                    console.log(`updated ${filePath}`);
                });
            });
        });
    };

    copyProblemFrom(solutionSrcPath, solutionDstPath); // create solution file
    copyProblemFrom(specSrcPath, specDstPath); // create spec file

    // [action] - add
} else if (action == "add") {

    if (!title) {
        throw `invalid input(title) provided.`;
        return;
    }

    const solutionSrcPath = `./src/tmpl`;
    const solutionDstPath = `./src/${num}.${title}`;
    const specSrcPath = `./test/spec/tmpl.js`;
    const specDstPath = `./test/spec/${num}.${title}.spec.js`;

    const createNewProblem = (srcPath, dstPath) => {
        fs.copy(srcPath, dstPath, (err) => {
            if (err) throw err;

            let filePath = dstPath;

            console.log(`${dstPath} - renamed copy complete.`);

            if (dstPath.includes("src") && !dstPath.includes("test/spec")) {
                filePath = dstPath + "/solution.js";
            }

            fs.readFile(filePath, "utf8", (err, data) => {
                if (err) throw err;

                let updatedData = data.replace(/\$\$\_title/g, title).replace(/\$\$\_num/g, num);

                fs.writeFile(filePath, updatedData, (err) => {
                    if (err) throw err;
                    console.log(`updated ${filePath}`);
                });
            });
        });
    };

    createNewProblem(solutionSrcPath, solutionDstPath); // create solution file
    createNewProblem(specSrcPath, specDstPath); // create spec file

} else {
    throw `unknown action, please use 'add' or 'rm'.`;
    return;
}
