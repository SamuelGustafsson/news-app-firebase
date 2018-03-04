import * as Firebase from "firebase";
let database;

export const init = () => {
  let config = {
    apiKey: "AIzaSyBRv_OkfLkmhXMigj7Js5TjC7TXdV-c7Pg",
    authDomain: "news-app-14451.firebaseapp.com",
    databaseURL: "https://news-app-14451.firebaseio.com",
    projectId: "news-app-14451",
    storageBucket: "news-app-14451.appspot.com",
    messagingSenderId: "632760921865"
  };
  firebase.initializeApp(config);
  database = firebase.database();
};
