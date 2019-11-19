////////////////////////////////////////
//
//  Front-End Login Page
// 
//    Michael Aboff
//    mwaboff@gmail.com
//    https://github.com/mwaboff
//
//    DSN6040 - Web Design and Javascript
//
////////////////////////////////////////

(function() {

  
  // Set the namespace to prevent any potential collisions.
  var LoginProject = window.LoginProject = (window.LoginProject || {});

  // Initializing variables.
  var USER;
  const DEFAULT_USERNAME = LoginProject.DEFAULT_USERNAME = "admin";
  const DEFAULT_PASSWORD = LoginProject.DEFAULT_PASSWORD = "password";


  /**
  * Initializes the LoginProject script.
  */
  var initialize = LoginProject.initialize = function() {
    USER = User.constructDefaultUser();
    createListeners();
  }

  /**
  * Adds event listeners to the submit and logout buttons.
  */
  var createListeners = function() {
    let submit_button = document.getElementById("submit_button");
    let logout_button = document.getElementById("logout_button");
    submit_button.addEventListener("click", clickSubmitButton);
    logout_button.addEventListener("click", clickLogoutButton);
  }


  /**
  * Add event listeners to the submit and logout buttons.
  */
  var clickSubmitButton = function() {
    let credential_array = extractCredentials();
    let username = credential_array[0];
    let hashed_password = credential_array[1];
    let is_valid = USER.validateCredentials(username, hashed_password);
    manageLogin(is_valid);
  }

  /**
  * Performs actions when logout button has been clicked.
  */
  var clickLogoutButton = function() {
    showLoginPage();
  }


  /**
  * Get the credentials typed into the login screen and hash the password.
  *
  * @return {Array} - An array containing the username and hashed password from user input.
  */
  var extractCredentials = function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let hashed_password = CryptoJS.SHA256(password).toString();
    return [username, hashed_password];
  }


  /**
  * If the login is valid, displays the hidden, locked content. Otherwise notifies user.
  *
  * @param {bool} is_valid - Boolean that determines if login credentials are correct or not.
  */
  var manageLogin = function(is_valid) {
    if (is_valid) {
      showLockedPage();
    } else {
      badLogin();
    }
  }


  /**
  * Changes the CSS to show the hidden content on page.
  */
  var showLockedPage = function() {
    let login_page = document.getElementById("login_container");
    let locked_page = document.getElementById("locked_content_container");
    login_page.classList.add("hidden");
    locked_page.classList.remove("hidden");
  }


  /**
  * Notifies the user that their login credentials are bad.
  */
  var badLogin = function() {
    alert("Either your username or password is incorrect.");
  }


  /**
  * Display the login page after the user logs out.
  */
  var showLoginPage = function() {
    let login_page = document.getElementById("login_container");
    let locked_page = document.getElementById("locked_content_container");
    login_page.classList.remove("hidden");
    locked_page.classList.add("hidden");
  }

})();