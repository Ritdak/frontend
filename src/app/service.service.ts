declare var require: any;
import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

const config = require('./config');

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
	URL = config.url;
  constructor( public http:HttpClient ) { }

  listContact() {
  	const promise = new Promise((resolve, reject) => {
  		this.http.get(this.URL + '/contact').subscribe((data: any) => {
  			resolve(data);
  		});
  	});
  	return promise;
  }

  findContact(id) {
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.URL + '/contact/' + id).subscribe((data: any) => {
        resolve(data);
      });
    });
    return promise;
  }

  deleteContact(id) {
    const promise = new Promise((resolve, reject) => {
      this.http.delete(this.URL + '/contact/' + id).subscribe((data: any) => {
        resolve();
      })
    });
    return promise;
  }

  editContact(id, name, number, email) {
    const body = {name, number, email};
    const promise = new Promise((resolve, reject) => {
      this.http.put(this.URL + '/contact/' + id, body).subscribe((data: any) => {
        resolve(data);
      });
    });
    return promise;
  }

  createContact(name, number, email) {
    const body = {name, number, email};
    const promise = new Promise((resolve, reject) => {
      this.http.post(this.URL + '/contact', body).subscribe((data: any) => {
        resolve(data);
      });
    });
    return promise;
  }
}
