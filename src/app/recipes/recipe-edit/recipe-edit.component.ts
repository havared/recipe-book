import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'gh-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipeForm: FormGroup;
  private subscription: Subscription;
  private recipeIndex: number;
  private recipe: Recipe;
  private isNew: boolean = true;
  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnPropert('id')){
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
          this.isNew = false;
        }else{
          this.isNew = true;
        }
      }
    );
  }

  initForm(isNew: boolean){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!isNew){
      for(let ingredient of this.recipe.ingredients){
            recipeIngredients.push(
              new FormGroup({
                name: new FormControl(ingredient.name, Validators.required),
                amount: new FormControl(ingredient.amount, [
                   Validators.required,
                   Validators.pattern("\\d+")
                 ])
              }))
      }

      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imageUrl: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
