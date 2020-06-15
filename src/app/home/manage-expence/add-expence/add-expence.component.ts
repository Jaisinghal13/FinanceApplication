import { Component, OnInit } from '@angular/core';
import { Expence } from 'src/app/models/expence.model';
import { ExpenceService } from 'src/app/services/expence.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-expence',
  templateUrl: './add-expence.component.html',
  styleUrls: ['./add-expence.component.css']
})
export class AddExpenceComponent implements OnInit {

  expence = new Expence();
  categories=[]
  constructor(public expenceService:ExpenceService,public router:Router,public categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getUserCategories();
  }

  addExpence(){
    if(this.expence.category!=null && this.expence.amount!=null){
    this.expenceService.addExpence(this.expence).then(res=>{
      this.router.navigateByUrl("home/manage-expencies");
    })
   }else{
     alert("Field can not be empty");
   }
  }

  getUserCategories(){
    this.categoryService.getAllCategory().subscribe(res=>{
      this.categories=res
    })
  }
}
