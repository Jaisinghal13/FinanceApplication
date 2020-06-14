import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  changecategory;
  categoryid;
  constructor(public route:ActivatedRoute,public category:CategoryService,public router:Router) { 
  }

  ngOnInit(): void {
    this.categoryid=this.route.snapshot.paramMap.get("id");
    console.log(this.categoryid);
    this.getCategory();
  }

  getCategory(){
    this.category.getCategoryById(this.categoryid).subscribe(res=>{
      console.log(res)
      this.changecategory=res;
    })
  }

  save(){
    this.category.changecategory(this.categoryid, this.changecategory).then(res=>{
      this.router.navigateByUrl("/home/manage-categories/all-category");
    })
  }

}
