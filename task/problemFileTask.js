const fs = require("fs-extra"),
    action = process.argv[2],
    num = process.argv[3],
    title = process.argv[4];

if (!num || !action) {
    throw `invalid input(action / num) provided.`;
    return;
}

if (action == "rm") {
    const removeProblem = (dstPath) => {
        fs.remove(dstPath, function(err) {
            if (err) {
                return console.error(err);
            }

            console.log(`remove '${dstPath}'' success!`)
        })
    };

    const getFilePathByNum = (path, num) => {
        let targetFilename = fs.readdirSync(path).filter(file => {
            return file.indexOf(`${num}.`) === 0;
        });

        if (!targetFilename || !(targetFilename.length > 0)) {
            console.warn(`[readdir] can't find target file to remove.`);
            return;
        } else {
            return `${path}${targetFilename}`;
        }
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

} else if (action == "add") {
    const solutionDstPath = `./src/${num}.${title}`;
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

    const solutionSrcPath = `./src/tmpl`;
    const specSrcPath = `./test/spec/tmpl.js`;

    createNewProblem(solutionSrcPath, solutionDstPath); // create solution file
    createNewProblem(specSrcPath, specDstPath); // create spec file

} else {
    throw `unknown action, please use 'add' or 'rm'.`;
    return;
}
