import {Recipe} from "../Recipe";
import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'gh-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe : Recipe;
  private subscription: Subscription;
  private recipeId: number;
  constructor(private sls : ShoppingListService,
    private route: ActivatedRoute,
    private recipeService : RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params : any) => {
        this.recipeId = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeId, 'edit']);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
}
