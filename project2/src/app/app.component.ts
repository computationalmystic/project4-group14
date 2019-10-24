import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  repos: Object;
  groups: Object;

  constructor(private apiService: ApiService){}
  
  ngOnInit() {
    console.log("ngOnInit");
    this.apiService.getRepos().subscribe((data)=>{
      console.log("getRepos");
      console.log(data);
      this.repos = JSON.stringify(data);
    });

    this.apiService.getGroups().subscribe((data) => {
      this.groups = JSON.stringify(data);
      console.log(data);
    })
  }
}
