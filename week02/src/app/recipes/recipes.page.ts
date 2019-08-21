import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3exH8GMi1wUxRs3ut-BaFCBrCNurLBun7fbK57Df_QanAkYo0',
      ingredients: ['Lontong', 'Sawi', 'Bumbu kecap', 'Tauge']
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
