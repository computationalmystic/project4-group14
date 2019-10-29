import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent implements OnInit {

  groups: Object;

  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getGroups().subscribe(data => {
      this.groups = data;
      console.log(this.groups);
    });
  }
}