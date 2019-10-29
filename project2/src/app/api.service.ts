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
   return this.httpClient.get("http://augur.osshealth.io:5000/api/unstable/repo-groups/" + rgid + "/repos/" + rpid + "/pull-request-acceptance-rate");
  }
<<<<<<< HEAD
  public getCommits(rgid, rpid) {
      return this.httpClient.get("http://augur.osshealth.io:5000/api/unstable/repo-groups/" + rgid + "/repos/" + rpid + "/top-committers")
    } 
  public getContributors(rgid, rpid) {
        return this.httpClient.get("http://augur.osshealth.io:5000/api/unstable/repo-groups/" + rgid + "/repos/" + rpid + "/contributors/")
||||||| merged common ancestors

  getGroupsInfo() {
    console.log("called getGroupsInfo");
    return this.httpClient.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/');
=======

  public getGroupsInfo() {
    console.log("called getGroupsInfo");
    return this.httpClient.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/');
>>>>>>> 851b8618f8a71fa0d5f5d5aa0d331f62e0fd396c
  }
<<<<<<< HEAD
||||||| merged common ancestors

  getContributors(rgid, rid){
    console.log("called getContributors");
    return this.httpClient.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/' + rgid + '/repos/' + rid + '/contributors' );
  } 
=======

  public getContributors(rgid, rpid){
    console.log("called getContributors");
    return this.httpClient.get('http://augur.osshealth.io:5000/api/unstable/repo-groups/' + rgid + '/repos/' + rpid + '/contributors');
  } 

  public getCommits(rgid, rpid) {
    return this.httpClient.get("http://augur.osshealth.io:5000/api/unstable/repo-groups/" + rgid + "/repos/" + rpid + "/top-committers")
  } 
>>>>>>> 851b8618f8a71fa0d5f5d5aa0d331f62e0fd396c
}
