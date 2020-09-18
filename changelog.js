// const fs = require("fs")

// try {
//     var changelog = fs.readFileSync("./changelog.md",
//         { encoding: 'utf8', flag: 'r' });
//     // console.log(changelog)

//     var latestStuff = changelog.match(/^(## [\s\S]+?)(?=\n## )/g).join("")
//     var pretty = latestStuff.replace(/\(#(\d+)\)/g, `([#$1](https://magknight.org/bug/$1))`).replace(/\(#(\d*?), (#\d*?)\)/g, `([#$1](https://magknight.org/bug/$1), [#$2](https://magknight.org/bug/$2))`)
//     console.log(pretty)
// } catch (error) {
//     core.setFailed(error.message);
// }

const core = require('@actions/core');
const fs = require("fs")

try {
    var changelog = fs.readFileSync(core.getInput('inputFile'), {
        encoding: 'utf8',
        flag: 'r'
    });
    var latestStuff = changelog.match(/^(## [\s\S]+?)(?=\n## )/g).join("").replace(/\n/g, /\\n/)
    var pretty = latestStuff.replace(/\(#(\d+)\)/g, `([#$1](https://magknight.org/bug/$1))`).replace(/\(#(\d*?), (#\d*?)\)/g, `([#$1](https://magknight.org/bug/$1), [#$2](https://magknight.org/bug/$2))`)
    core.setOutput("changes", latestStuff);
    core.setOutput("prettyChanges", pretty);
} catch (error) {
    core.setFailed(error.message);
}