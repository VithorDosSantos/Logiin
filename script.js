function login() {
    const users = {
      "ale@cesupa.br": { password: "123123", redirect: "https://www.cesupa.br" },
      "pedro@giroto.com": { password: "223344", redirect: "https://www.detran.pa.gov.br" },
      "isaac@java.com": { password: "asdasd", redirect: "https://en.idopterlabs.com.br" }
    };
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailErrado");
    const passwordError = document.getElementById("passwordErrada");
  
    emailError.style.display = "none";
    passwordError.style.display = "none";
  
    if (users[email]) {
      if (users[email].password === password) {
        window.location.href = users[email].redirect;
      } else {
        passwordError.style.display = "block";
      }
    } else {
      emailError.style.display = "block";
    }
  }
  