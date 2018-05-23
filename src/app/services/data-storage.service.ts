import { Injectable } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { Http, Response, Jsonp } from "@angular/http";
import { RecipeModel } from "../recipes/recipe.model";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable()
export class DataStorageService{

    constructor( private recipeService: RecipeService, private http: Http, private router : Router , private activatedRoute: ActivatedRoute){}

    saveData(){
        return this.http.put('http://192.168.10.173:3000/testing',this.recipeService.getRecipes());
    }

    fetchData(){
        return this.http.get('http://192.168.10.173:3000/testing').subscribe(
            (response: Response)=>{
                // console.log(response.json());
                const data : any=response.json();
                // console.log(response.json()[0]);
                // console.log(recipes[0]);
                const data1:string=data[0].recipes;
                    console.log(JSON.parse(data1));
                    const recipes :RecipeModel[]=JSON.parse(data1);
                // console.log(response.json()[0].recipes);
                // console.log(recipes[0]);
                this.recipeService.setRecipes(recipes);
                this.router.navigate(['/recipes']);
                
            }
        );
    }
}