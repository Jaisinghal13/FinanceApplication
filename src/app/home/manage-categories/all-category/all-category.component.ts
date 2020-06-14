import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {
  categories=[]
  constructor(public category:CategoryService) {

   }

  ngOnInit(): void {
    this.category.getAllCategory().subscribe(res=>{
      this.categories=res;
      console.log(this.categories);
    })
  }
  deleteCategory(id){
    console.log("inside delete")
    this.category.deleteCategory(id);
  }

}
