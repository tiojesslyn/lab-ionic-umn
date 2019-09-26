import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../places/place.model";
import {ActionSheetController, LoadingController, ModalController, NavParams} from "@ionic/angular";
import {BookingService} from "../booking.service";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(
      private modalCtrl: ModalController,
      private navParams: NavParams,
      private actionSheetController: ActionSheetController,
      private loadingController: LoadingController,
      private bookingService: BookingService
  ) { }

  ngOnInit() { }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  async onBookPlace() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Book Place',
      buttons: [{
        text: 'Book w/ Random Date',
        handler: () => {
          this.loadingController.create({
            keyboardClose: true,
            message: 'Booking the place...'
          }).then(loadingEl => {
            loadingEl.present()
            setTimeout(() => {
              loadingEl.dismiss();
              this.modalCtrl.dismiss({message: 'booked!'}, 'confirm')
            }, 2000)
          });
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel Clicked')
        }
      }]
    })

    await actionSheet.present();

  }

  onBookMyPlace() {
    this.modalCtrl.dismiss({message: 'This is a dummy message!'}, 'confirm');
    this.bookingService.addToMyBookings(this.selectedPlace);
  }

}
