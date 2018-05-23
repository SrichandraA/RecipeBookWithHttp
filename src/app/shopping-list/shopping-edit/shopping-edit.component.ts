import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;
  @ViewChild('f') slForm : NgForm;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.editItemIndex.subscribe(
      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem = this.shoppingListService.getIngredientById(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        });
      }
    );
  }
onAdd(form:NgForm){
  const value=form.value;
  if(this.editMode){
    this.shoppingListService.updateIngredient(this.editedItemIndex,new Ingredient(value.name,value.amount));
  }
  else{
    this.shoppingListService.onItemAdded(new Ingredient(value.name,value.amount));
  }
  form.reset();
  this.editMode=false;
}

onClear(){
  this.slForm.reset();
  this.editMode=false;
}

onDelete(){
  this.onClear();
  this.shoppingListService.deleteIngredient(this.editedItemIndex);
}
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
