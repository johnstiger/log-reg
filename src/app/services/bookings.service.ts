import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private url = "http://btal-ride.herokuapp.com/api/client/booking";

  constructor(private http: HttpClient) { }

  getBookings(){
    return this.http.get(this.url);
  }

  updateBooking(){
    alert('update');
  }

 

  // getBookingIndex(booking: Booking){
  //   return this.bookings.indexOf(booking);
  // }

  // getBooking(index: number){
  //   return this.bookings[index];
  // }

  // addBooking(booking: Booking){
  //   this.bookings.push(booking);
  // }

  // deleteBooking(booking: Booking){
  //   this.bookings.splice(this.bookings.indexOf(booking), 1);
  // }

  // updateBooking(index: number, booking: Booking){
  //   this.bookings[index] = booking;
  // }
}
