import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  id: any;
  contact: any;
  constructor(public route: ActivatedRoute, public service: ServiceService) { }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
  	this.getContact();
  }

  getContact() {
  	this.service.findContact(this.id).then((data: any) => {
  		this.contact = data;
  		console.log(this.contact);
  	})
  }
}
