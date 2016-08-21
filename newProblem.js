const fs = require("fs-extra");

const num = process.argv[2],
    title = process.argv[3];

if (!num || !title) {
    throw "invalid num/title provided.";
}

const createNewProblem = (srcPath, dstPath) => {
    fs.copy(srcPath, dstPath, (err) => {
        if (err) throw err;

        console.log(`${dstPath} - renamed copy complete`);

        let filePath = dstPath;
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
    solutionDstPath = `./src/${num}.${title}`,
    specSrcPath = `./test/spec/tmpl.js`,
    specDstPath = `./test/spec/${num}.${title}.js`;

createNewProblem(solutionSrcPath, solutionDstPath);
createNewProblem(specSrcPath, specDstPath);
