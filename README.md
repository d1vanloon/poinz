# Poinz - Distributed Planning Poker

[![Build Status](https://github.com/d1vanloon/poinz/actions/workflows/master.yml/badge.svg)](https://github.com/d1vanloon/poinz/actions/workflows/master.yml)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Release](https://img.shields.io/github/v/release/d1vanloon/Poinz.svg?style=flat)]()
[![Last Commit](https://img.shields.io/github/last-commit/d1vanloon/Poinz.svg?style=flat)]()

Poinz (/pɔɪnts/) is a simple web app for distributed teams in an agile setup. It allows to easily estimate items of interest (e.g. "stories").

The goal was to provide a ready-to-use tool without the hassle of registration/login, setup and a lot of configuration.

![poinz_screenshot](https://user-images.githubusercontent.com/1777143/153183461-03a0e0b4-239a-4c7b-a49d-a285be828f09.png)

Similar tools are : https://www.pointingpoker.com/ or https://www.planningpoker.com/

## Configuration

### Application Name

The application name can be configured via the `APP_NAME` environment variable. By default, the application uses "Poinz" as the name, but you can customize it for your organization.

**Note: This is a build-time configuration variable.** The value is embedded into the client application during the build process.

#### For GitHub Actions (Recommended)
1. Go to your repository settings → Secrets and variables → Actions
2. Click on the "Variables" tab
3. Add a new repository variable:
   - Name: `APP_NAME`
   - Value: `"MyCompany Planning Poker"`

#### For Local Development
```bash
export APP_NAME="MyCompany Planning Poker"
npm run build
```

#### For Docker Build
```bash
docker build --build-arg APP_NAME="MyCompany Planning Poker" -t poinz .
```

This will update all user-facing text to use your custom application name.

### GitHub Repository URL

The GitHub repository URL can be configured via the `GITHUB_REPOSITORY_URL` environment variable. This URL is used in various parts of the application, such as the sample story that references the manual.

**Note: This is a build-time configuration variable.** The value is embedded into the client application during the build process.

#### For GitHub Actions (Recommended)
1. Go to your repository settings → Secrets and variables → Actions
2. Click on the "Variables" tab
3. Add a new repository variable:
   - Name: `GITHUB_REPOSITORY_URL`
   - Value: `"https://github.com/your-org/your-poinz-fork/"`

#### For Local Development
```bash
export GITHUB_REPOSITORY_URL="https://github.com/your-org/your-poinz-fork/"
npm run build
```

#### For Docker Build
```bash
docker build --build-arg GITHUB_REPOSITORY_URL="https://github.com/your-org/your-poinz-fork/" -t poinz .
```

By default, this points to the original Poinz repository at `https://github.com/d1vanloon/poinz/`.

## User Manual

Confused? Or you want to learn about hidden features? Read the [User Manual](docu/manual.md).

## Contribute

You can contribute in multiple ways...

* Maybe you have a feature request? Found a bug? General feedback? Please open a new [discussion](https://github.com/d1vanloon/poinz/discussions).
* You want to extend Poinz? Or fix one of the issues? Check out the [Technical documentation](./docu/technicalDocu.md).
