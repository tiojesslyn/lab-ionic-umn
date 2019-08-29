import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipesService} from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  getRecipe(RecipeId : string) {
    console.log(this.recipesService.getRecipe(RecipeId));
  }

  deleteRecipe(RecipeId : string) {
    this.recipesService.deleteRecipe(RecipeId);
    this.recipes = this.recipesService.getAllRecipes();
  }

}
