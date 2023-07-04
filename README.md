# Presets Basic CLI
A CLI tool for quickly setting up small web dev projects with useful preset templates

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

To install Presets Basic globally, use npm:

```sh
npm install -g presets-basic
```

This will install the CLI tool globally, so it can be run from the command line.

## Usage

Here's how you can use the Presets Basic CLI:

### Create a New Frontend Project

```sh
presets-basic make <project-name> [-y]
```

Creates a new frontend project with the given project name. It includes an `index.html` and `style.css` file by default.

- Use the `-y` option to automatically include a `script.js` file.
- If you don't use the `-y` option, you will be prompted to decide whether or not to include a `script.js` file.

Example:

```sh
presets-basic make my-new-project -y
```

### Show Help

```sh
presets-basic --help
```

or

```sh
presets-basic -h
```

Displays help information. (Basically this usage guide)

### Show Version

```sh
presets-basic --version
```

or

```sh
presets-basic -V
```

Displays the currently installed version of presets-basic.

## License

This project is licensed under the GNU GLPv3.0 License. See the [LICENSE](./LICENSE) file for details.