## How to set up the Firebase Functions
```npm install -g firebase-tools```

Firebase init to configure the firebase functions in your local environment `firebase init`
Select the following options when initialising the firebase function in the local environment:

- Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices => Functions: - - - - Configure and deploy Cloud Functions
- First, let’s associate this project directory with a Firebase project …. => Use an existing project
- Select a default Firebase project for this directory => application_name
- What language would you like to use to write Cloud Functions? => JavaScript
- Do you want to use ESLint to catch probable bugs and enforce style? => N
- Do you want to install dependencies with npm now? (Y/n) => Y

> Now open the index.js under functions directory
Deploy the code to firebase functions using the following command:

`firebase deploy` to deploy only function `firebase deploy --only functions`

> Go to the Project Console > Functions and there you will find the URL of the API.

## Install ExpressJs
`npm i express --save` and deploy to  the firebase and go to the `https://....net/api/todos`
