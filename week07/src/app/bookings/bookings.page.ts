import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookingService} from "./booking.service";
import {Booking} from "./booking.model";
import {IonItemSliding} from "@ionic/angular";
import {Place} from "../places/place.model";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  bookings: Booking[];
  myBookings: Place[];

  constructor(
      private activatedRoute: ActivatedRoute,
      private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.bookings = this.bookingService.getAllBookings();
    this.myBookings = this.bookingService.getMyBookings();
    console.log(this.myBookings);
  }


  ionViewWillEnter() {
    this.myBookings = this.bookingService.getMyBookings();
    console.log(this.myBookings)
  }

  onCancelMyBooking(id: string) {
    this.bookingService.removeFromMyBookings(id);
    this.myBookings = this.bookingService.getMyBookings();
  }

  deleteBooking(id: String, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.bookingService.deleteBooking(id);
    this.bookings = this.bookingService.getAllBookings();
  }

}
