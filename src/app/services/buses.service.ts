import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BusesService {

  private url = 'https://btal-ride.herokuapp.com/api/admin/bus';

  constructor(private http: HttpClient) { }

  getBuses(){
    return this.http.get(this.url);
  }

  updateBus(){
    alert('update');
  }

  deleteBus(){
    alert('delete');
  }
}
