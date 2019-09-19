import { Injectable } from '@angular/core';
import {Booking} from "./booking.model";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookings: Booking[] = [
      new Booking(
          'b1',
          'p1',
          'u1',
          'Gading Apartemen',
          5
      ),

      new Booking(
          'b2',
          'p2',
          'u2',
          'Scientia Residence',
          8
      )
  ];

  constructor() { }

  getAllBookings() {
    return [...this.bookings];
  }

  getBooking(id: String) {
    return {
      ...this.bookings.find(booking => {
        return booking.id === id;
      })
    };
  }

  deleteBooking(id: String) {
    this.bookings = this.bookings.filter(booking => booking.id !== id);
  }
}
