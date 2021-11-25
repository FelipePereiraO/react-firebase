import {initializeApp} from 'firebase/app';

import {getAuth} from 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD5Bup0UXSYgO5D_qlEClwrdYRBPCCLbpo",
  authDomain: "ecommerceapp-9f240.firebaseapp.com",
  databaseURL: "https://ecommerceapp-9f240-default-rtdb.firebaseio.com",
  projectId: "ecommerceapp-9f240",
  storageBucket: "ecommerceapp-9f240.appspot.com",
  messagingSenderId: "763912846306",
  appId: "1:763912846306:web:556b5b5845ee97980657bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
