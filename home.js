import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth , db} from "./config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";



onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      console.log(uid);
      
    } else {
      window.location = 'index.html'
    }
});


const logout = document.querySelector("#logout-btn");

logout.addEventListener('click' , ()=>{
    signOut(auth).then(() => {
        console.log("Signout Successful");
        window.location = "index.html"
        
      }).catch((error) => {
        console.log(error);
        
      });
});
  

const title = document.querySelector("#title");
const description = document.querySelector("#Blog");
const form = document.querySelector("#form");

form.addEventListener("submit" , async (event)=>{
  event.preventDefault();

  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title:title.value,
      description:description.value,
      uid:auth.currentUser.uid,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

});

const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});


const ul = document.querySelector("#ul");
const btn = document.querySelector("#publish-btn");

















