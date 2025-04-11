# 🛠️ Expo Practice

## 🌟 Overview

This document provides the requirements, technical stack and estimate detail features for Practice with Expo

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have the correct versions installed:

- **[Node.js >=18.x](https://nodejs.org/en/download/package-manager)**
- **[pnpm v10.2.1](https://pnpm.io/installation)**

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo


### Run app

| Command                                                                   | Action                             |
| :------------------------------------------------------------------------ | :--------------------------------- |
| `$ git clone git@gitlab.asoft-python.com:ngan.tongkim/react-training.git` | Clone repository                   |
| `$ pnpm install`                                                          | Install packages dependencies      |
| `$ git checkout feat/expo-practice`                                       | Check out branch                   |
| `$ pnpm start`                                                            | Starts the application (Expo CLI). | 

---

## 🗂️ Project Structure

```shell
.

├── .husky                          # Husky configuration
├── assets                          # Public assets folder
├── .storybook                      # Storybook folder
├── src
│   ├── app                         # Application routes and APIs
│   ├── components                  # Application components
│   ├── constants                   # 
│   ├── types                       # 
│   ├── hooks                       # 
├── eas.json                        # 
├── .editorconfig                   # Editor configuration
├── .eslint.config.mjs              # ESLint configuration
├── components.json                 # Shadcn configuration
├── .gitignore                      # Git ignore file
├── .lintstagedrc                   # Lint-stage configuration
├── .prettierrc                     # Prettier configuration
├── .commitlint.config.js           # Commitlint configuration
├── package-lock.json
├── package.json                    # Application dependencies
├── README.md                       # README file
├── tsconfig.json                   # TypeScript configuration
```

---

## 🛠️ Technical Stack

### 💻 Languages

- [HTML](https://www.w3schools.com/html/): is the standard markup language for Web pages.
- [CSS](https://www.w3schools.com/css/): is the language we use to style an HTML document.
- [Typescript](https://www.typescriptlang.org): is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transpiled to JavaScript.

### 📚 Frameworks & Libraries

- [React Native](https://reactnative.dev/): a best-in-class JavaScript library for building user interfaces.
- [Expo](https://docs.expo.dev/): a framework that makes developing Android and iOS apps easier.
- [Zustand](https://github.com/pmndrs/zustand): a small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy API based on hooks, isn't boilerplate or opinionated.
- [React Hook Form](https://react-hook-form.com/): performant, flexible and extensible forms with easy-to-use validation.
- [Zod](https://zod.dev/): is a TypeScript-first schema declaration and validation library.

### 🧰 Development Tools

- [Husky](https://github.com/typicode/husky): can prevent bad git commit, git push.
- [Prettier](https://prettier.io): is an opinionated code formatter
- [Commitlint](https://commitlint.js.org): Easy setup. Get high commit message quality and short feedback cycles by linting commit messages right when they are authored.

### ✅ Testing

- [Jest](https://jestjs.io/): is a delightful JavaScript Testing Framework with a focus on simplicity.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

---

