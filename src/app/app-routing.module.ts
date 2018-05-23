import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGaurd } from "./services/auth-gaurd.service";

const appRoutes : Routes =[
    
    {path: '' , redirectTo: '/login', pathMatch: 'full'},
    {path:'recipes', component: RecipesComponent ,canActivate:[AuthGaurd], children:[
        {path:'', component: RecipeStartComponent},
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecipeDetailComponent},
        {path:':id/edit', component: RecipeEditComponent}
        
    ]},
    {path:'shopping-list' , component: ShoppingListComponent,canActivate:[AuthGaurd]},
    {path:'signup' , component: SigninComponent},
    {path:'login' , component: LoginComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

} 