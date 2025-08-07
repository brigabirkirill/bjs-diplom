"use strict"
const UserForm = new UserForm();
userForm.loginFormCallback = data => ApiConnector.login(data, callback => {
    if (callback.success) {
      location.reload();
    } else {
      userForm.setLoginErrorMessage(response.error);
    }
  })

  userForm.registerFormCallback = data => ApiConnector.register(data, callback => {
    if (callback.success) {
      location.reload();
    } else {
      userForm.setRegisterErrorMessage(response.error);
    }
  })


  
