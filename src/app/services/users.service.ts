import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://btal-ride.herokuapp.com/api/admin/client";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.url);
  }

  updateUser(){
    alert('update');
  }

  deleteUser(){
    alert('delete');
  }
}
