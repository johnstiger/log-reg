import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email_address: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])

  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.form.value);
    /**
     * axios [post, get, put, delete ]
     * axios.post(url, data).then(res=>{}).catch(err=>{})
     * axios.get(url).then(res=>{}).catch(err=>{})
     * axios.put(url, data).then(res=>{}).catch(err=>{})
     * axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
     */
    
    axios.post("https://btal-ride.herokuapp.com/api/client/login", this.form.value).then(res => {
      this.router.navigate(['/userhome']);
      console.log(this.form.value);
      
      /**
       * token => res.data.token
       * localStorage.setItem('token', res.data.token)
       */
    }).catch(err => {
      console.log(err)
    })
  }

}
