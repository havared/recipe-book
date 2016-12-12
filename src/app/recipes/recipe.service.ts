import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {
  private recipes : Recipe[] = [
    new Recipe('Biryani', 'Hyderabad', 'http://i.ndtvimg.com/i/2016-06/biryani_625x350_71466587674.jpg',
      [
        new Ingredient('chicken', 500),
        new Ingredient('rice', 500),
      ]
    ),
    new Recipe('Biryani', 'Hyderabadi', 'http://i.ndtvimg.com/i/2016-06/biryani_625x350_71466587674.jpg', [])
  ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
}
