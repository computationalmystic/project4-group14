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

  constructor(private apiService: ApiService){}
  
  ngOnInit() {
    console.log("ngOnInit 1");
    this.apiService.getRepos().subscribe((data)=>{
      console.log("ngOnInit");
      console.log(data);
      this.repos = data['repos'];
    });
  }
}
