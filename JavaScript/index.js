////////////////// Obtenez le modal d'inscription ///////////////////////
function registerUser() {
  // elle recupere la valeur qui est stocker dans l element input    
  const userName = document.getElementById("UserName").value;
  const passWord = document.getElementById("PassWord").value;

 localStorage.setItem("user", userName);
 localStorage.setItem("password",passWord);


}



// enregistrer les infos du user deans le localStorage
function saveLoginLocalS(event) {
  event.preventDefault();
  // elle recupere la valeur qui est stocker dans l element input    
  const userName = document.getElementById("user_name").value;
  const passWord = document.getElementById("pswd").value;

  const userNameC = localStorage.getItem("user");
  const passWordC = localStorage.getItem("password");


  if (userName === userNameC && passWord === passWordC) {
    // alert("done")
    window.location.replace("acceuil.html");
  } else {
    alert("Erreur");
  }
  

  // window.location.href = ("../acceuil.html");

 
}

