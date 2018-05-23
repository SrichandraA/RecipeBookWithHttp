import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature='recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDA0kYWQQoSse5fssHhp3zA2jdhDj2rsGM",
      authDomain: "ng-recipe-book-8a196.firebaseapp.com"
    });
  }
  onNavigate(feature: string){
    this.loadedFeature=feature;
  }
}
