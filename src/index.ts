import { GithubApiService } from './GithubApiService';
import * as _ from 'lodash';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();
if (process.argv.length < 3) {
  console.log('Please pass the username as an argument')
}
else {
  const userName = process.argv[2];
  svc.getUserInfo(userName, (user: User) => {
    svc.getRepos(userName, (repos: Repo[]) => {
      const sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
      const filteredRepos = _.take(sortedRepos, 5);
      user.repo = filteredRepos;
      console.log(user);
    });
  });
};
