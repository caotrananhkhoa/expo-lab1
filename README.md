# Welcome to [expo-lab1](https://github.com/caotrananhkhoa/expo-lab1) project

## Prerequisites
We'll need the following tools to get started:

- Install Expo Go on a physical device.
- Prepare for development by installing the required tools.

This tutorial also assumes that you have a basic knowledge of JavaScript and React. If you have never written React code, go through the official React tutorial.

### 1. Initialize a new Expo app
We will use `create-expo-app` to initialize a new Expo app. It is a command line tool that allows to create a new React Native project with the expo package installed.

It will create a new project directory and install all the necessary dependencies to get the project up and running locally. Run the following command in your terminal:
```
npx create-expo-app StickerSmash
cd StickerSmash
```
This command will create a new directory for the project with the name: **StickerSmash**.

### 2. Download assets

[Download assets archive](https://docs.expo.dev/static/images/tutorial/sticker-smash-assets.zip)

We'll be using these assets throughout this tutorial. After downloading the archive, unzip it and replace the existing assets directory with it in the project directory. This will override the default assets created when the new project was initialized.

Now, let's open the project directory in our favorite code editor or IDE. Throughout this tutorial, we will use VS Code for our examples.

### 3. Install dependencies
To run the project on the web, we need to install the following dependencies that will help to run the project on the web:
```
npx expo install react-dom react-native-web @expo/webpack-config
```

### 4. Run the app on mobile and web
In the project directory, run the following command to start a development server from the terminal:
```
npx expo start
```
Once the development server is running, the easiest way to launch the app is on a physical device with Expo Go. For more information, see Open app on a device.

To see the web app in action, press `w` in the terminal. It will open the web app in the default web browser.
