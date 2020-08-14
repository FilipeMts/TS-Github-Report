import { Repo } from './Repo';

export class User {
  login: string;
  fullName: string;
  repoCount: number;
  followerAccount: number;
  repo?: Repo[];

  constructor(userResponse: any) {
    this.login = userResponse.login;
    this.fullName = userResponse.name;
    this.repoCount = userResponse.public_repos;
    this.followerAccount = userResponse.login;
    //this.repo = userResponse.followers;
  }
}