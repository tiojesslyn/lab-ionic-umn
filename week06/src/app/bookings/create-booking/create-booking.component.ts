import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../places/place.model";
import {ActionSheetController, LoadingController, ModalController, NavParams} from "@ionic/angular";

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
  ) { }

  ngOnInit() {}

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

}
