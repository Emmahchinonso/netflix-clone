import Firebase from "firebase/app";import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// config
const config = {
	apiKey: "AIzaSyBC8yI3WBN5arLQfZ5JrhSBMXl81rWV-Yc",
	authDomain: "netflix-clone-nonso.firebaseapp.com",
	databaseURL: "https://netflix-clone-nonso.firebaseio.com",
	projectId: "netflix-clone-nonso",
	storageBucket: "netflix-clone-nonso.appspot.com",
	messagingSenderId: "205032415831",
	appId: "1:205032415831:web:d7921d7c0939a72c6e7912",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
