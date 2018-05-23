import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpRequest } from "selenium-webdriver/http";
import * as firebase from 'firebase';
import { ValidityService } from "./validity.service";
import { Router, ActivatedRoute } from "@angular/router";
@Injectable()
export class AuthService{
    token: boolean=false;
    constructor(private http:Http,
        private validityService:ValidityService,
        private router:Router,
        private activatedRoute:ActivatedRoute){}
    
    registration(Rusername: string, Rpassword: string){
        // const headers =  new Headers({'Access-Control-Allow-Origin':true,'Access-Control-Allow-Credentials':true})
        
        // this.http.post('http://192.168.10.173:3000/register',{username:Rusername,password:Rpassword},{withCredentials:true}).subscribe(
        //     (response: Response)=>{
        //         console.log(response);
        //     }
        // );
    
        firebase.auth().createUserWithEmailAndPassword(Rusername,Rpassword)
        .then(
            response =>{
                this.router.navigate(['login']);

            }
        )
        .catch(
            error => console.log(error)
        )

    }

    
    login(Lusername: string, Lpassword: string){


        // let enco : any = new Headers();
        // enco.set('Access-Control-Allow-Credentials','true');
        // enco.set('Content-Type', 'application/json');
            // const headers =  new Headers({'Access-Control-Allow-Origin':'http://localhost:4200',
            //                             'Access-Control-Allow-Methods': 'POST,GET',
            //                             'Access-Control-Allow-Credentials':true,
            //                             'Content-Type': 'application/json',
            //                             'Access-Control-Allow-Headers':'X-Requested-With,content-type'
            //                         });
            // const headers= new Headers();
            // headers.append('Content-Type', 'application/json');
            // // headers.append('Access-Control-Allow-Origin','http://localhost:4200');
            // headers.append('Access-Control-Allow-Credentials','true');
            // let headers = new Headers();
            // headers.append('Content-Type', 'application/json');
            //  headers.append('Access-Control-Allow-Headers', 'session-variable');
            // headers.append('Access-Control-Allow-Methods', 'POST, OPTIONS');
            // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
            // headers.append('Access-Control-Allow-Credentials', 'true');
//         let requestOptions = new RequestOptions({ headers:headers,withCredentials:true});
 
//    this.http.post('http://192.168.10.173:3000/login',
//     {username:Lusername,password:Lpassword},
//     requestOptions
//    ).subscribe(
//     (response: Response)=>{
//         console.log(response.status+""+response.ok);
//     }
// );

        // const headers =  new Headers({'Access-Control-Allow-Origin':'http://localhost:4200',
        //                                 withCredentials:true,
        //                                 'Access-Control-Allow-Methods': 'POST,GET',
        //                                 'Access-Control-Allow-Credentials':true,
        //                                 'Content-Type': 'application/json',
        //                                 'Access-Control-Allow-Headers':'X-Requested-With,content-type'
        //                             });
        // const headers =  new Headers({
        //     'Content-Type': 'application/json',
        //         });

        // this.http.post('http://192.168.10.173:3000/login',
        // {username:Lusername,password:Lpassword},
        // {headers:headers},).subscribe(
        //     (response: Response)=>{
        //         console.log(response.status+""+response.ok);
        //     }
        // );

        firebase.auth().signInWithEmailAndPassword(Lusername,Lpassword)
        .then(
            response => {
                this.validityService.valid.next(true);
                this.router.navigate(['../','recipes'],{relativeTo:this.activatedRoute});
            }
        )
        .catch(
            error => console.log(error)
        )

    }

    // isAuthenticated(){
        
    //     // if(firebase.auth().currentUser.getIdToken()){
    //     //     return true;
    //     // }
    //     // else{
    //     //     return false;
    //     // }
    //     try{
    //         firebase.auth().currentUser.getIdToken().then(
    //             ()=>{
    //                 this.validityService.valid.next(true);
    //             }
    //         )
    //         .catch(
    //             ()=>{
    //                 this.validityService.valid.next(false);
    //             }
    //         )
    //     }
    //     catch{
    //         this.validityService.valid.next(false);
    //     }
        
    //     // .then(
    //     //     (token: string) => this.token = token
    //     // );
    // }

    logout(){
    //     const headers =  new Headers({
    //     'Access-Control-Allow-Credentials':true,
    //     'Content-Type': 'application/json'
    // });
    
    //     this.http.get('http://192.168.10.173:3000/logout',{withCredentials:true}).subscribe(
    //         (response: Response)=>{console.log(response);}
    //     );
    }
}