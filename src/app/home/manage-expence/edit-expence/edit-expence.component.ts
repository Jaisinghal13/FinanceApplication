import { Component, OnInit } from '@angular/core';
import { ExpenceService } from 'src/app/services/expence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-expence',
  templateUrl: './edit-expence.component.html',
  styleUrls: ['./edit-expence.component.css']
})
export class EditExpenceComponent implements OnInit {
  expence;
  expenceid;
  categories=[];
  constructor(public expenceService:ExpenceService,public route:ActivatedRoute,public categoryService:CategoryService,public router:Router) { }

  ngOnInit(): void {
    this.expenceid=this.route.snapshot.paramMap.get("id")
    this.getExpenceId();
    this.getUserCategories();
  }

  getExpenceId(){
    this.expenceService.getExpenceById(this.expenceid).subscribe(res=>{
      this.expence=res;
    })
  }

  getUserCategories(){
    this.categoryService.getAllCategory().subscribe(res=>{
      this.categories=res
    })
  }

  save(){
    if(this.expence.amount!=null){
    this.expenceService.updateExpence(this.expenceid, this.expence).then(res=>{
      this.router.navigateByUrl("/home/manage-expencies");
    })
  }else{
    alert("Amount can not be empty");
  }
  }
}
