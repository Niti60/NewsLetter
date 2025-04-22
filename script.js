    // Newsletter function
    const Newsletter = ()=>{
        let email = document.querySelector("#EmailID");
        let errmsg = document.querySelector("#errmsg");
        let userEmail = document.querySelector("#useremail")
        let success = document.querySelector(".success");
        let container = document.querySelector(".container")
        
        if (!email.value.includes("@")||email.value.includes("@example.com")||!email.value.endsWith(".com")) {
          email.style.backgroundColor = "rgba(255, 0, 0, 0.24)"
          email.style.border = "1px solid red"
          errmsg.style.display ="inline-block"
        
        return;
        } else {
          success.style.display = "inline-block"
          container.style.display = "none"
          userEmail.innerText = email.value;
        }
        document.querySelector("#EmailID").value = ""
        }
        // back to newsletter page
        function BackToNews(){
        let success = document.querySelector(".success");
        let container = document.querySelector(".container")
          success.style.display = "none"
          container.style.display = "flex"
        }