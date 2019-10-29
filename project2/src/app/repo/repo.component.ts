import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
    title = 'project2';
    repos: Object;
    groups: Object;
    constructor(private apiService: ApiService) { }

    ngOnInit() {
      console.log("getRepos");
      this.apiService.getRepos().subscribe(data => {
        this.repos = data;
        console.log(this.repos);
      });
  }

}