var errorFound = false;

$("#show").click(function (event) {
  event.preventDefault();
  var attrType = $("#password").attr("type");
  if (attrType === "password") {
    $("#password").attr("type", "text");
    $("#show").text("hide");
  } else {
    $("#password").attr("type", "password");
    $("#show").text("show");
  }
});

$("#button").click(function (event) {
  event.preventDefault();
  errorFound = false;
  if (!validateEmail($("#email").val())) {
    addError("Please Enter a valid email !!", "emailerr");
    errorFound = true;
  } else {
    removeError("emailerr");
  }

  if (!validatePhone($("#phone").val())) {
    addError("Phone Number should be of 10 Digit !!", "phoneerr");
    errorFound = true;
  } else {
    removeError("phoneerr");
  }

  if (!validatePassword($("#password").val())) {
    addError(
      "Invalid Password Format should contain atleast <br/> 1 lowercase <br/> 1 uppercase <br/> 1 number",
      "passworderr"
    );
    errorFound = true;
  } else {
    removeError("passworderr");
  }

  if (
    !validatePasswordMismatch($("#password").val(), $("#confirmpass").val())
  ) {
    addError("Password Mismatch !!", "confirmpasserr");
    errorFound = true;
  } else {
    removeError("confirmpasserr");
  }

  if (errorFound) return;

  alert("Form Submitted Successfully!!");
  $("#message").show();
  setTimeout(() => {
    $("#message").hide();
    $("#reset").click();
  }, 2000);
});

function validateEmail(email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var emailvalid = emailReg.test(email) && email !== "";
  return emailvalid;
}

function validatePhone(phone) {
  if (phone.length >= 1 && phone.length == 10 && phone.length !== "") {
    return true;
  } else {
    return false;
  }
}

function validatePassword(password) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password) && password !== "";
}

function addError(message, id) {
  $(`#${id}`).html(`<p style="color:red;">${message}</p>`);
  errorFound = true;
}

function validatePasswordMismatch(a, b) {
  if (a !== b) {
    return false;
  } else {
    return true;
  }
}

function removeError(id) {
  $(`#${id}`).html("");
}
