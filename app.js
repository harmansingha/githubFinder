const github = new Github();
const ui = new UI();

const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  if (userText !== '') {
    github.getUsers(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          //Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        }
        else {
          //Show profile
          ui.clearAlert();
          ui.showProfile(data.profile);

          //Show Repos
          ui.showRepos(data.repos);
        }
      });
  } else {
    //Clear profile
    ui.clearProfile();
  }
});