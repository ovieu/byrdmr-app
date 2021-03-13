// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyDS2CnS1mHMuUSVvCR11NE0RDqS0_xAXgA",
  authDomain: "byrdmr-contact-from.firebaseapp.com",
  projectId: "byrdmr-contact-from",
  storageBucket: "byrdmr-contact-from.appspot.com",
  messagingSenderId: "489035679863",
  appId: "1:489035679863:web:8f75f3c30af5d77eb89e72",
  measurementId: "G-K85KH91ZJR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// get the reference to the firebase database for storing messages submitted by the users
let messageRef = firebase.database().ref("messages");

function submitForm(e) {
  e.preventDefault();

  // get the user inputs
  let fullName = getInputVal("fullName");
  let email = getInputVal("email");
  let message = getInputVal("message");

  // save the message to firebase
  saveMessage(fullName, email, message);

  // show success alert
  document.querySelector(".alert-box").style.display = "block";

  setTimeout(function () {
    document.querySelector(".alert-box").style.display = "none";
  }, 3000);

  // reset form
  document.getElementById("contactForm").reset();
}

function saveMessage(mFullName, mEmail, mMessage) {
  let newMessageRef = messageRef.push();
  newMessageRef.set({
    fullName: mFullName,
    email: mEmail,
    message: mMessage,
  });
}

// Returns the contact form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Listen for form submission
document.getElementById("contactForm").addEventListener("submit", submitForm);
