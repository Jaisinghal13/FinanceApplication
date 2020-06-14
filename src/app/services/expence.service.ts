import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Expence } from '../models/expence.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenceService {

  constructor(private db:AngularFirestore,public auth:AuthService) { 
    
   }
 
   addExpence(expence:Expence){
     let newExpence=Object.assign({},expence)
     return this.db.collection("user").doc(this.auth.uid).collection("expence").add(newExpence);
   }
 
   deleteExpence(id){
     this.db.collection("user").doc(this.auth.uid).collection("expence").doc(id).delete();
   }
 
   
   getAllExpence(){
     return this.db.collection("user").doc(this.auth.uid).collection("expence").snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as any;
         const id = a.payload.doc.id;
         return { id, ...data };
       }))
     );
   }
 
    updateExpence(id,updateExpence){
      return this.db.collection("user").doc(this.auth.uid).collection("expence").doc(id).update(Object.assign({},updateExpence))
    }
 
    getExpenceById(id){
      return this.db.collection("user").doc(this.auth.uid).collection("expence").doc(id).valueChanges()
    }

    getExpenceByCategoryId(id){
      console.log(id)
      return this.db.collection("user").doc(this.auth.uid).collection("expence",ref=>ref.where("category","==",id)).snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );      
    }
}
