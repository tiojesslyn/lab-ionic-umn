import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Place} from "../../place.model";
import {PlacesService} from "../../places.service";
import {CreateBookingComponent} from "../../../bookings/create-booking/create-booking.component";
import {ActionSheetController, ModalController} from "@ionic/angular";

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
    loadedPlace: Place;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private placeSvc: PlacesService,
        private modalCtrl: ModalController,
        private actionSheetCtrl: ActionSheetController
    ) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(
            paramMap => {
                if (!paramMap.has('placeId')) {
                    return;
                }
                this.loadedPlace = this.placeSvc.getPlace(paramMap.get('placeId'));
            }
        )
    }

    onBookPlace() {
        this.actionSheetCtrl.create({
            header: 'Choose an Action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: () => {
                        this.openBookingModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: () => {
                        this.openBookingModal('random');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
            ]
        }).then(actionSheetEl => {
            actionSheetEl.present();
        });
        /*this.modalCtrl
            .create({
                component: CreateBookingComponent,
                componentProps: { selectedPlace: this.loadedPlace }
            })
            .then(modalElement => {
                modalElement.present();
                return modalElement.onDidDismiss();
            })
            .then(resultData => {
                console.log(resultData.data, resultData.role);
                if (resultData.role === 'confirm') {
                    console.log('Booked');
                }
            });*/
    }

    openBookingModal(mode: 'select' | 'random') {
        console.log(mode);
        this.modalCtrl
            .create({
                component: CreateBookingComponent,
                componentProps: {selectedPlace: this.placeSvc}
            })
            .then(modalEl => {
                modalEl.present();
                return modalEl.onDidDismiss();
            })
            .then(resultData => {
                console.log(resultData.data, resultData.role);
                if (resultData.role === 'confirm') {
                    console.log('BOOKED')
                }
            })
    }
}
