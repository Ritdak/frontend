import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	contacts: any;
  constructor(public service: ServiceService, public router: Router) { }

  ngOnInit() {
  	this.listContacts();
  }

  listContacts() {
  	this.service.listContact().then((data: any) => {
  		this.contacts = data;
  	});
  }

  //Routing using a method on the typescript part.
  /*toSingle(id) {
    this.router.navigate(['single/' + id]);
  }*/
}
