import { Component, OnInit } from '@angular/core';
import {UkmModel} from "../ukm.model";
import {UkmService} from "../ukm.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loadMyUkm: UkmModel[] = [];

  constructor(private service: UkmService) { }

  ngOnInit() {
    this.loadMyUkm = this.service.getMyUkm();
  }

  ionViewWillEnter() {
    this.loadMyUkm = this.service.getMyUkm();
  }

  onCancelMyUkm(id: string) {
    this.service.removeFromMyUkm(id);
    this.loadMyUkm = this.service.getMyUkm();
  }

}
