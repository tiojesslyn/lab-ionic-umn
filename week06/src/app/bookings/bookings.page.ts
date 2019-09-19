import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookingService} from "./booking.service";
import {Booking} from "./booking.model";
import {IonItemSliding} from "@ionic/angular";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  bookings: Booking[];

  constructor(
      private activatedRoute: ActivatedRoute,
      private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.bookings = this.bookingService.getAllBookings();
  }

  deleteBooking(id: String, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.bookingService.deleteBooking(id);
    this.bookings = this.bookingService.getAllBookings();
  }

}
