import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRouteSnapshot, ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipe:RecipeModel;
   recipe:RecipeModel;
    id:number;

  constructor(private recipeService:RecipeService, private activatedRouter: ActivatedRoute,private router: Router ) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeService.getRecipeById(this.id);
      }
    );
  }
  
  onDeleteRecipe(){
    let res = confirm("Are you sure you want to delete this recipe ?");
    if(res){
      
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['../'],{relativeTo:this.activatedRouter});

    }else{

    }
    
  
  }

  toShoppingList(){
    
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.activatedRouter});
  }
}
