let fname = document.querySelector("#fname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let cPassword = document.querySelector("#confirmPassword");

let fnameError = document.querySelector("#fnameError");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let cPasswordError = document.querySelector("#confirmPasswordError");

let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages before each check
    fnameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    cPasswordError.innerText = "";

    // First name validation
    if (fname.value.trim().length === 0) {
        fnameError.innerText = "Please enter the first name";
        isValid = false;
    } else if (fname.value.trim().length <= 2) {
        fnameError.innerText = "First name should have more than 2 characters";
        isValid = false;
    }

    // Email validation
    if (email.value.trim().length === 0) {
        emailError.innerText = "Please enter the email";
        isValid = false;
    }

    // Password validation
    if (password.value.length === 0) {
        passwordError.innerText = "Please enter the password";
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters long";
        isValid = false;
    } else {
        let hasLower = false;
        let hasUpper = false;
        let hasNumber = false;
        let hasSpecial = false;

        let password1 = password.value;
        for (let i = 0; i < password1.length; i++) {
            let char = password1[i];
            if (char >= 'A' && char <= 'Z') {
                hasUpper = true;
            } else if (char >= 'a' && char <= 'z') {
                hasLower = true;
            } else if (char >= '0' && char <= '9') {
                hasNumber = true;
            } else {
                hasSpecial = true;
            }
        }

        if (!hasUpper || !hasLower || !hasNumber || !hasSpecial) {
            passwordError.innerText = "Password must include uppercase, lowercase, number, and special character";
            isValid = false;
        }
    }

    // Confirm password check
    if (password.value !== cPassword.value) {
        cPasswordError.innerText = "Passwords do not match";
        isValid = false;
    }

    // Final result
    if (isValid) {
        alert("Form validation is successful!");
        document.querySelector("form").reset();
    }
});