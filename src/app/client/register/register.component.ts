import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact_number: new FormControl('', Validators.required),
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
  get firstname() {
    return this.form.get('firstname')
  }
  ngOnInit(): void {
    
  }
  onSubmit() {
    // alert(JSON.stringify(this.form.value));
    console.log(this.form.value);
    /**
     * axios [post, get, put, delete ]
     * axios.post(url, data).then(res=>{}).catch(err=>{})
     * axios.get(url).then(res=>{}).catch(err=>{})
     * axios.put(url, data).then(res=>{}).catch(err=>{})
     */
    axios.post("https://btal-ride.herokuapp.com/api/client/register", this.form.value).then(res=>{
       this.router.navigate(['userhome']);
        }).catch(err=>{
            console.log(err)
        })
  }
}
