import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  //uid;
  constructor(public db:AngularFirestore,public authService:AuthService) { 
    //this.uid=this.authService.getUid();
  }

  getUserProfile(){
    console.log(this.authService.getUid())
    return this.db.collection("user").doc(this.authService.getUid()).valueChanges()
  }

  setUserEditedProfile(user){
    this.db.collection("user").doc(this.authService.getUid()).update(Object.assign({},user));
  }  
}
