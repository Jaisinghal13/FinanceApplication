import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ExpenceService } from 'src/app/services/expence.service';

@Component({
  selector: 'app-expence-summary',
  templateUrl: './expence-summary.component.html',
  styleUrls: ['./expence-summary.component.css']
})
export class ExpenceSummaryComponent implements OnInit {

  category;
  categories=[];
  expences=[];
  totalExpence;

  constructor(public categoryService:CategoryService,public expenceService:ExpenceService) {
   }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(res=>{
      console.log(res)
      this.categories=res
    })
  }

  changeCategory(event){
    this.expenceService.getExpenceByCategoryId(event.target.value).subscribe(res=>{
      console.log(res)
      this.expences=res;
      this.totalExpence=0;
      this.expences.forEach(element=>{
        this.totalExpence=this.totalExpence+element.amount;
      })
    })
  }

    

}
