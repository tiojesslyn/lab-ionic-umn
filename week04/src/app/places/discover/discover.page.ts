import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Place} from "../place.model";
import {PlacesService} from "../places.service";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private menuCtrl: MenuController, private placesServices: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesServices.getPlaces();
  }

  onOpenMenu() {
    this.menuCtrl.toggle('m1');
  }

}
