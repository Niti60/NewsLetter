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
        }
        // back to newsletter page
        function BackToNews(){
            //setting everything to default 
        document.querySelector("#EmailID").value = ""
        email.style.backgroundColor = "";
        email.style.border = "";
        errmsg.style.display = "none";
            //getting back to main page 
        let success = document.querySelector(".success");
        let container = document.querySelector(".container")
        success.style.display = "none"
        container.style.display = "flex"
        }
