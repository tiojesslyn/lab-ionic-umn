import { Component, OnInit } from '@angular/core';
import {UkmModel} from "../ukm.model";
import {UkmService} from "../ukm.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loadedUkm: UkmModel[];

  constructor(private ukmService: UkmService, private alertController: AlertController) { }

  ngOnInit() {
    this.loadedUkm = this.ukmService.getAllUkm();
  }

  async presentAlert(ukm: Object) {
    const alert = await this.alertController.create({
      header: 'Beneran Mau Join?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Serius',
          handler: () => this.joinUKM(ukm)
        }
      ]
    });
    await alert.present();
  }

  joinUKM(ukm) {
    this.ukmService.addToMyUkm(ukm);
  }

}
