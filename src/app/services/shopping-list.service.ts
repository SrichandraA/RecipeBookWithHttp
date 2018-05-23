import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{

    editItemIndex = new Subject<number>();
    private ingredients: Ingredient[]  =[
        new Ingredient("Apple",5),
        new Ingredient("Banana",10)
      ];

      getIngredients(){
          return this.ingredients;
      }

    getIngredientById(index:number){
        return this.ingredients[index];
    }

      onItemAdded(ingredient:Ingredient){
          this.ingredients.push(ingredient);
      }

      addIngredients(ingredients:Ingredient[]){

            this.ingredients.push(...ingredients);
      }

      updateIngredient(index:number,ingredient:Ingredient){
          this.ingredients[index]=ingredient;
      }

      deleteIngredient(index:number){
          this.ingredients.splice(index,1);
      }
}