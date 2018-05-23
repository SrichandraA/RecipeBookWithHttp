import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ValidityService } from "./validity.service";

@Injectable()
export class AuthGaurd implements CanActivate{
    
    constructor(private validityService:ValidityService){}
    valid:boolean;
    canActivate(route:ActivatedRouteSnapshot,state: RouterStateSnapshot){
        this.validityService.valid.subscribe(
            (value:boolean)=>{
                this.valid = value;
            }
        );
        return this.valid;
    }
    

}