import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'gh-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  @Output() recipes : Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>()
  recipe = new Recipe('Biryani', 'Hyderabad', 'http://i.ndtvimg.com/i/2016-06/biryani_625x350_71466587674.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe : Recipe ){
    this.recipeSelected.emit(recipe);
  }
}
