import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: any;
  constructor(public route: ActivatedRoute, public service: ServiceService, public router: Router) { }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
  }

  delete() {
  	this.service.deleteContact(this.id).then(() => {
  		this.router.navigate(['list']);
  	});
  }
}
