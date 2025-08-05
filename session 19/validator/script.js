// content-type
// application/x-www-form-urlencoded

const usernameElem = document.querySelector("input[name=username]");
const emailElem = document.querySelector("input[name=email]");
const passwordElem = document.querySelector("input[name=password]");
const repeatPasswordElem = document.querySelector(
  "input[name=repeat-password]"
);

function signup() {
  // Validation
  const username = usernameElem.value.trim();
  const email = emailElem.value.trim();
  const password = passwordElem.value.trim();
  const repeatPassword = repeatPasswordElem.value.trim();

  const validation = validate(username, email, password, repeatPassword);
  if (!validation.isValid) {
    return alert(validation.message);
  }

  // Submittion
  const submitForm = new FormData();
  submitForm.append("username", "test");

  const ajax = new XMLHttpRequest();
  ajax.open("POST", "http://localhost/test");
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ajax.send(submitForm);

  ajax.onload = () => {
    // final logic
  };
  ajax.onerror = (error) => {
    console.log(error);
  };
}

function validate(username, email, password, repeatPassword) {
  // username
  //   if (username.length < 8) {
  //     return {
  //       isValid: false,
  //       message: "نام کاربری باید حداکثر 8 گاراکتر باشد",
  //     };
  //   }

  //   if (username.length > 64) {
  //     return {
  //       isValid: false,
  //       message: "نام کاربری باید حداقل 64 گاراکتر باشد",
  //     };
  //   }

  // email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailRegexValid = regex.test(email);
  if (!isEmailRegexValid) {
    return {
      isValid: false,
      message: "ایمیل نامعتبر",
    };
  }

  //   if(isNaN())
  // if(Number(age) >=)

  //   password
  if (password !== repeatPassword) {
    return {
      isValid: false,
      message: "رمز عبور را بدرستی تکرار کنید",
    };
  }

  return {
    isValid: true,
    message: null,
  };
}

function showPassword() {
  if (passwordElem.type === "password") {
    passwordElem.type = "text";
  } else {
    passwordElem.type = "password";
  }
}
