import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-recipe-start',
  template: `
    <p>
      Please select a recipe
    </p>
  `,
  styles: []
})
export class RecipeStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
