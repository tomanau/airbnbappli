import Store from 'react-native-simple-store';

class Api {
  constructor() {
    // Création d'un clone de l'objet defaultUser
    this.user = Object.assign({}, this.defaultUser);
  }

  defaultUser = {
    _id: null,
    token: null,
    account: {
      username: null,
      description: null,
      rooms: [],
      favorites: [],
      photos: []
    }
  };

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() {
    if (this.user._id) {
      return true;
    }
    return false;
  }


  authenticate(user) {
    Store.save('user', user)
    .then(() => {
      console.log('Saved');
    });
  }

  signUp(user, callback) {
    fetch(`${Config.host}/api/user/sign_up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          this.authenticate(json);
        }
        callback(json);
      });
  }

  logIn(user = {}, callback) {
    fetch(`http://localhost:3001/api/user/log_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          this.authenticate(json);
        }
        callback(json);
      });
  }

  logOut(callback) {
    Cookies.remove("user");
    this.setUser(Object.assign({}, this.defaultUser));
    callback();
  }

  // Authentification obligatoire
  getProfile(profile = {}, callback) {
    if (this.isAuthenticated()) {
      fetch(`${Config.host}/api/user/${profile.id}`, {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      })
        .then(res => res.json())
        .then(json => {
          callback(json);
        });
    } else {
      callback({
        error: "You must be authenticated"
      });
    }
  }

  getHome(callback) {
    fetch(`${Config.host}/api/home`).then(res => res.json()).then(json => {
      callback(json);
    });
  }

  getRoom(roomId, callback) {
    fetch(`${Config.host}/api/room/${roomId}`)
      .then(res => res.json())
        .then((json) => {
          callback(json);
      });
  }
}

export default new Api();
