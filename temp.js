import fs from "fs-extra";

fs.readdirSync("./src").forEach((file) => {
  const testFileName = `${file}.spec.js`;
  const testFilePath = `./test/spec/${testFileName}`;

  if (fs.existsSync(testFilePath)) {
    fs.renameSync(testFilePath, `./src/${file}/${testFileName}`);
  }
});
