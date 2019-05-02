class Github {
  constructor() {
    this.client_id = '54c1e97a878d157596b9';
    this.client_secret = '51df79db42b077a763dab1c2db171cd87de5338e';
    this.getUrl = 'https://api.github.com/users';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUsers(user) {
    const profileResponse = await fetch(`${this.getUrl}/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`${this.getUrl}/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile: profile,
      repos: repos
    };
  }
}