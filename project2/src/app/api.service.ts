import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient) { }

    public getRepos() {
        console.log("called getRepos");
        return this.httpClient.get('http://augur.osshealth.io:5000/api/unstable/repos');
    }

    //get pull request from api//
    public getPullRequest(rgid, rpid) {

        return this.httpClient.get("http://augur.osshealth.io:5000/api/unstable/repo-groups/" + rgid + "/repos/" + rpid + "/pull-request-acceptance-rate");
        
     
    }

}
