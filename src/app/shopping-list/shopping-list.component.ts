import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from './';
@Component({
  selector: 'gh-shopping-list',
  templateUrl: 'shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit {
  items : Ingredient[] = [];
  selectedItem: Ingredient = null;
  constructor(private sls: ShoppingListService) {}

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onSelectItem(item: Ingredient){
    this.selectedItem = item;
  }

  onCleared(){
    this.selectedItem = null;
  }
}
