const fs = require("fs-extra"),
    action = process.argv[2],
    num = process.argv[3],
    title = process.argv[4];

if (!num || !action) {
    throw `invalid input(action / num) provided.`;
    return;
}

const solutionDstPath = `./src/${num}.${title}`,
    specDstPath = `./test/spec/${num}.${title}.spec.js`;

if (action == "rm") {
    const removeProblem = (dstPath) => {
        fs.remove(dstPath, function(err) {
            if (err) {
                return console.error(err);
            }

            console.log(`remove '${dstPath}'' success!`)
        })
    };

    removeProblem(solutionDstPath); // remove solution file
    removeProblem(specDstPath); // remove spec file

} else if (action == "add") {
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

    const solutionSrcPath = `./src/tmpl`,
        specSrcPath = `./test/spec/tmpl.js`;

    createNewProblem(solutionSrcPath, solutionDstPath); // create solution file
    createNewProblem(specSrcPath, specDstPath); // create spec file

} else {
    throw `unknown action, please use 'add' or 'rm'.`;
    return;
}
