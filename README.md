# Finley React Native

## Getting Started
App requires Node ^18.18.

It is best to setup NVM to handle node versioning.

TEST TEST TES

[NVM Install](https://github.com/nvm-sh/nvm)

Clone the repo and run `npm i` then `npm start`.

Follow the prompts to start the application. For development its best to start the expo server before launching inside of a simulator.

> NOTE: Make sure the simulator is opened before launching.

## Mobile Development
To develop on your mobile device download the Expo Go app. After running the start command scan the QR Code to launch the app inside the sandbox app.

> NOTE: To see light/dark mode follow the command prompt and switch to Expo Go before running.

## Tech Stack
The following frameworks/tools are being used to create the POC experience.

> NOTE: There are Expo addons that are being include. Check the package.json for all in use.

[Expo](https://expo.dev/)

[React Native](https://reactnative.dev/)

[React Navigation](https://reactnavigation.org/)

[Redux](https://redux-toolkit.js.org/)

[Icons](https://github.com/oblador/react-native-vector-icons)

[BLE](https://github.com/dotintent/react-native-ble-plx)

## Build
To build the applications out you will first want to run the `prebuild` command. From a barebones Expo app it creates the
android and ios directories. From there you can run the following commands to create individual builds. These will build and create the proper files for each native device.

> NOTE: Production build steps are TBD but should be able to build from the respective native IDEs.

Build iOS

```
npm run ios
```

Build Android

```
npm run android
```


## Linking
This is currently a work in progress. I have it handling for Expo Go App but would need to be tested on native.

Uses the Expo Linking feature.

If running Expo Go you can start the app in the command link like to open the Login page with queryParams.

> NOTE: Query params special characters have to be escaped and not documented when using `npx uri-scheme`.

```
npx uri-scheme open exp://192.168.1.201:8081/--/CreateAccount\?firstName=Jason\&lastName=Jacobson\&email=jason\@finley.com --ios
```