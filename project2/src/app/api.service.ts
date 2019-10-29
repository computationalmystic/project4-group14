import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getRepos(){
    console.log("called getRepos");
    return this.httpClient.get('http://augur.osshealth.io:5000/api/unstable/repos');
  }

  public getGroups(){
    console.log("called getGroups");
    return this.httpClient.get('http://augur.osshealth.io:5000/api/unstable/repo-groups')
  }

  public getPullRequest(rgid, rpid) {
    console.log("called getPullRequest");
    return this.httpClient.get("http://augur.osshealth.io:5000/api/unstable/repo-groups/" + rgid + "/repos/" + rpid + "/pull-request-acceptance-rate");
  }

  getGroupsInfo() {
    console.log("called getGroupsInfo");
    return this.httpClient.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/');
  }

  getContributors(rgid, rid){
    console.log("called getContributors");
    return this.httpClient.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/' + rgid + '/repos/' + rid + '/contributors' );
  } 
}
