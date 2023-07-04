#!/usr/bin/env node

const fs = require("fs");
const https = require("https");
const path = require("path");
const readline = require("readline");

const args = process.argv.slice(2);

const helpMessage = `
Usage:
  presets-basic make <project-name> [-y]    Create a new frontend project [-y to add js]
  presets-basic convert <project-name>      Convert project (Coming soon...)
  presets-basic --help, -h                  Show help
  presets-basic --version, -V               Show version
`;

const version = require("./package.json").version;

const commands = {
  make: (options) => {
    const projectName = options[0];

    if (!projectName) {
      console.log("Usage: presets-basic make <project-name> [-y]");
      process.exit(1);
    }

    fs.mkdirSync(projectName);

    const templatesUrl =
      "https://raw.githubusercontent.com/AustinPerzben/presets-basic-cli/main/templates";
    const files = ["index.html", "style.css"];
    let includeScript = false;

    const fetchAndWriteFile = (file) => {
      const titleCase = (str) => {
        let upper = true;
        let newStr = "";
        for (let i = 0, l = str.length; i < l; i++) {
          if (str[i] == " ") {
            upper = true;
            newStr += " ";
            continue;
          }
          newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase();
          upper = false;
        }
        return newStr;
      };
      const url = `${templatesUrl}/${file}`;
      https.get(url, (res) => {
        res.setEncoding("utf8");
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          if (file === "index.html") {
            data = data.replace(
              "<title></title>",
              `<title>${titleCase(projectName)}</title>`
            );
            if (includeScript) {
              data = data.replace(
                "</head>",
                '  <script src="./script.js" defer></script>\n</head>'
              );
            }
          }
          fs.writeFileSync(path.join(projectName, file), data);
        });
      });
    };

    const fetchAndWriteFiles = () => {
      files.forEach(fetchAndWriteFile);
    };

    if (options.includes("-y")) {
      includeScript = true;
      files.push("script.js");
      fetchAndWriteFiles();
    } else {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question("Do you want a script.js file? (y/n): ", (answer) => {
        if (answer.toLowerCase() === "y") {
          includeScript = true;
          files.push("script.js");
        }
        fetchAndWriteFiles();
        rl.close();
      });
    }
  },
  convert: () => {
    console.log("Coming soon...");
  },
  help: () => {
    console.log(helpMessage);
  },
  version: () => {
    console.log(version);
  },
};

const main = () => {
  const command = args[0];

  switch (command) {
    case "make":
      commands.make(args.slice(1));
      break;
    case "convert":
      commands.convert();
      break;
    case "--help":
    case "-h":
      commands.help();
      break;
    case "--version":
    case "-V":
      commands.version();
      break;
    default:
      console.log("Unknown command. Use --help for usage information.");
      break;
  }
};

main();
