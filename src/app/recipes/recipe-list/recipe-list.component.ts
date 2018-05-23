import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { RecipeModel } from './../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy{
  recipeList:RecipeModel[] =[];
  subscription: Subscription;

  constructor(private recipeService:RecipeService , private router: Router, private activatedRoute: ActivatedRoute) { }

  // ngOnInit() {
  //   this.recipeList=this.recipeService.getRecipes();
  // }
  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: RecipeModel[]) => {
          this.recipeList = recipes;
        }
      );
    this.recipeList = this.recipeService.getRecipes();
  }

  onAddRecipe(){
    this.router.navigate(['new'],{relativeTo:this.activatedRoute});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

