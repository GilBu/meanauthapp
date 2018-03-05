import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Http, Headers, Response, Request} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable()

export class RegisterComponent implements OnInit {

  name: String;
  email: String;
  username: String;
  password: String;

  onSubmit(f: NgForm) {
    console.log(this.name);
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.http.post('http://localhost:3000/users/register', JSON.stringify(user),{ headers: headers});
    console.log(JSON.stringify(user));
  }
  constructor(
    private http:Http,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
