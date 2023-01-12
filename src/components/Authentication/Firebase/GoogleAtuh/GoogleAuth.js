import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Google Authentication import
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  deleteUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "../firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ----------------------Sign In------------------------------------
const auth = getAuth(app);

export const handleSignInUser = (email, password) => {
  return toast.promise(
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        return user;
      })
      .catch((error) => {
        return error.code;
        //Fail Alert
      }),
    {
      pending: {
        render() {
          return "Signing...";
        },
        icon: "🚀",
      },
    }
  );
};

// ----------------------Sign In End--------------------------------

//

// --------------------Sign Out------------------------------------

export const handleSignOut = () => {
  return signOut(auth)
    .then((res) => {
      // let signedOutUser = {};
      window.localStorage.clear();
      window.location.reload()
     
    })
    .catch((error) => {
      return error;
    });
};

// --------------------Sign Out end------------------------------------

//--------------------------- create user-----------------------------
export const handleCreateUser = (userData, email, password) => {
  return toast.promise(
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      
        const loggedInUser = {
          isSignedIn: true,
          firebaseUID: user.uid,
          ...userData,
        };

        return loggedInUser;
      })
      .catch((error) => {
        return error.code;

        // ..
      }),
    {
      pending: {
        render() {
          return "Creating user...";
        },
        icon: "🚀",
      },
    }
  );
};
//--------------------------- create user end-----------------------------

export const handleGetUserInfo = (email) => {
  return fetch(`http://localhost:5000/user/${email}`)
    .then((response) => response.json())
    .then((data) => {
      const loggedInUser = {
        isSignedIn: true,
        ...data,
      };
      return loggedInUser;
    })
    .catch((error) => {
      return error;
    });
};
// -----------------------------Get Singed In profile from database end-------------------

//-----------saving to our own database start----------
export const handleSaveUser = (userData) => {
  return fetch("http://localhost:5000/addUser", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  //-----------saving to our own database end----------
};

export const handleDeleteUser = (uid) => {
  console.log('uid',uid)
  
  getAuth()
  .deleteUser(uid)
  .then(() => {
    console.log('Successfully deleted user');
  })
  .catch((error) => {
    console.log('Error deleting user:', error);
  });
};
