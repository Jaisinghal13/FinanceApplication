import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  
  categoryname;
  constructor(public category:CategoryService,public router:Router) { }

  ngOnInit(): void {
  }

  addCategory(){
    if(this.categoryname!=null){
    this.category.addCategory(this.categoryname);
    this.router.navigateByUrl('/home/manage-categories/all-category')
  }else{
    alert("Category Field cannot be empty");
  }
}

}
