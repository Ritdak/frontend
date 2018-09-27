import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  name: any;
  number: any;
  email: any;
  constructor(public service: ServiceService, public router: Router) { }

  ngOnInit() {
  }

  submit() {
  	this.service.createContact(this.name, this.number, this.email).then(() => {
  		this.router.navigate(['list']);
  	});
  }
}
