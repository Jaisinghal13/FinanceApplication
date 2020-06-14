import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../models/category.model';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories:Category[] | any =[]
  constructor(private db:AngularFirestore,public auth:AuthService) { 
   //this.categories.push("food");
   //this.categories.push("Entertainment"); 
   //this.getAllDummyValues();   
   this.getAllCategory();
  }

  addCategory(categoryname:string){
    //this.categories.push(categoryname)
    let category=new Category()
    category.name=categoryname;
    //category.uid=this.auth.getUid();
    let catObject = Object.assign({},category)
    this.db.collection("user").doc(this.auth.uid).collection("category").add(catObject);
  }

  deleteCategory(id){
    this.db.collection("user").doc(this.auth.uid).collection("category").doc(id).delete();
  }

  // getAllCategory(){
  //   return this.db.collection("category",ref=>ref.where("uid","==", this.auth.getUid())).snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as any;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     }))
  //   );
  // }
  getAllCategory(){
    return this.db.collection("user").doc(this.auth.uid).collection("category").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  changecategory(id,updatecategory){
    return this.db.collection("user").doc(this.auth.uid).collection("category").doc(id).update(Object.assign({},updatecategory))
  }

  getCategoryById(id){
    return this.db.collection("user").doc(this.auth.uid).collection("category").doc(id).valueChanges()
  }
  // getAllDummyValues(){
  //   this.db.collection("dummy").valueChanges().subscribe(res=>{
  //     console.log(res);
  //   })
  // }
}
