

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFW02eta5fA3DvkHoYJEoksExkkpVe7XA",
    authDomain: "login-43ffd.firebaseapp.com",
    databaseURL: "https://login-43ffd.firebaseio.com",
    projectId: "login-43ffd",
    storageBucket: "login-43ffd.appspot.com",
    messagingSenderId: "456797356195",
    appId: "1:456797356195:web:80ae97d673e968fcb93f16"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth =firebase.auth();
 function signUp(){
  var email =document.getElementById("email");
  var password =document.getElementById("password");
  const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  promise.catch(e => alert(e.message));
  alert("You have Signed In");
 }
 function signIn(){

var email=document.getElementById("email");
var password=document.getElementById("password");

const promise =auth.signInWithEmailAndPassword(email.value,password.value);
promise.catch(e=> alert(e.message));
alert("Signing In as "+email.value);

}
function signOut(){
  auth.signOut();
  alert("SignedOut");
}
auth.onAuthStateChanged(function(user){
    
    if(user){
      
      var email = user.email;
      alert("Active User " + email);
    
    }else{
      
      alert("No Active User");
  
    }
    
    
    
  });
  

