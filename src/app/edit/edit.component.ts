import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  name: any;
  number: any;
  email: any;
  constructor(public route: ActivatedRoute, public service: ServiceService, public router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getContact();
  }

  getContact() {
  	this.service.findContact(this.id).then((data: any) => {
  		console.log(data);
		this.name = data.name;
		this.number = data.number;
		this.email = data.email;
  	})
  }

  submit() {
  	this.service.editContact(this.id, this.name, this.number, this.email).then((data: any) => {
  		this.router.navigate(['single/' + this.id]);
  	})
  }

}
