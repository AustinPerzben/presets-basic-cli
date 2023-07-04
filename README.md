# Presets Basic CLI
A CLI tool for quickly setting up small web dev projects with useful preset templates.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Prerequisites

Before you begin, ensure you have Node.js installed on your machine. You can check if Node.js is installed by running the following command in your terminal:

```sh
node --version
```

If Node.js is not installed, you can download and install it from the [official Node.js website](https://nodejs.org/).

## Installation

To get started with Presets Basic, you'll need to install it globally on your system. This ensures that you can run the `presets-basic` command from any directory in your terminal.

Here's how you can install Presets Basic using npm, which is the Node.js package manager. If you followed the prerequisites, you should have npm installed:

```sh
npm install -g presets-basic
```

This command tells npm to install `presets-basic` globally (`-g` flag) so that it's available system-wide.

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
