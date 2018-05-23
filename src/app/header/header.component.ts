import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { Response } from "@angular/http";
import { DataStorageService } from "../services/data-storage.service";
import { RecipeModel } from "../recipes/recipe.model";
import { RecipeService } from "../services/recipe.service";
import * as firebase from 'firebase';
import { ValidityService } from "../services/validity.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{

   valid:boolean;

    constructor(private dataStorageService: DataStorageService,
        private recipeService: RecipeService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private validityService: ValidityService){
        }
    
  ngOnInit(){
      this.validityService.valid.subscribe(
          (value:boolean)=>{
              this.valid=value;
              console.log(value);
          }
      );
  }
    onSaveData(){

        this.dataStorageService.saveData().subscribe(
            (response: Response)=>{console.log(response);}
        );
    }

    onFetchData(){
        this.dataStorageService.fetchData();
    }

    onLogout(){
        firebase.auth().signOut();
        this.validityService.valid.next(false);
        this.router.navigate(['login']);

    }
}