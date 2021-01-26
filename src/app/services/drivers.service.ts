import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../services/models';



@Injectable({
  providedIn: 'root'
})
export class DriversService {

  private url = "http://btal-ride.herokuapp.com/api/admin/driver";

  constructor(private http: HttpClient) { }

  getDrivers(){
    return this.http.get(this.url);
  }

  updateDriver(){
    alert('update');
  }

  deleteDriver(){
    // alert('delete');
  }

  // addDriver(driver: Driver){
  //   this.drivers.push(driver);
  // }
}
