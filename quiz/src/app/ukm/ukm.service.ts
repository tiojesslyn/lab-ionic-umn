import { Injectable } from '@angular/core';
import {UkmModel} from "./ukm.model";

@Injectable({
  providedIn: 'root'
})
export class UkmService {
  private ukm: UkmModel[] = [
      new UkmModel(
          'u1',
          'Basket',
          'Ukm basket adalah'
      ),
      new UkmModel(
          'u2',
          'Paduan Suara',
          'ulson'
      ),
      new UkmModel(
          'u3',
          'Ping pong',
          'ukm pingpong adalah'
      ),
      new UkmModel(
          'u4',
          'Taekwondo',
          'ukm taekwondo adalah'
      ),
      new UkmModel(
          'u5',
          'Badminton',
          'ukm badminton adalah'
      )
  ];

  private myUkms: UkmModel[] = [];

  constructor() { }

  addToMyUkm(u: UkmModel) {
      this.myUkms.push(u);
  }

  removeFromMyUkm(id: string) {
      this.myUkms = this.myUkms.filter(u => {
          return u.id !== id;
      })
  }

  getMyUkm() {
      return [...this.myUkms];
  }

  getAllUkm() {
      return [...this.ukm];
  }
}
