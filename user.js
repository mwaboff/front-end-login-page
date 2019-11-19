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


class User {

  /**
  * Constructs a User instance by setting instance variables.
  *
  * @param {String} username - A username for this user.
  * @param {String} hashed_password - An SHA256 hashed password.
  */
  constructor(username, hashed_password) {
    this.username = username;
    this.hashed_password = hashed_password;
  }


  /**
  * Constructs a User instance based off of the default credentials.
  */
  static constructDefaultUser() {
    let username = LoginProject.DEFAULT_USERNAME;
    let hashed_password = CryptoJS.SHA256(LoginProject.DEFAULT_PASSWORD).toString();
    return new User(username, hashed_password);
  }


  /**
  * Constructs a User instance by setting instance variables.
  *
  * @param {String} given_username - A user given username.
  * @param {String} given_hashed_password - A user given password hashed using SHA256.
  */
  validateCredentials(given_username, given_hashed_password) {
    let is_correct_username = given_username === this.username;
    let is_correct_password = given_hashed_password === this.hashed_password;
    return is_correct_username && is_correct_password;
  }
}