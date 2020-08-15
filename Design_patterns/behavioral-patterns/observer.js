const user = new User();

const init = () => {
  user.on('login', userLoggedIn);
};

const userLoggedIN = () => {
  //user logged in
};

app.init();

const login = () => {
  //Log in logic

  //Then:
  user.trigger('login');
};

login();
