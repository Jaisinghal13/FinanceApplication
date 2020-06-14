import { Component, OnInit } from '@angular/core';
import { ExpenceService } from 'src/app/services/expence.service';

@Component({
  selector: 'app-all-expence',
  templateUrl: './all-expence.component.html',
  styleUrls: ['./all-expence.component.css']
})
export class AllExpenceComponent implements OnInit {

  expences=[]
  constructor(public expenceService:ExpenceService) { }

  ngOnInit(): void {
    this.expenceService.getAllExpence().subscribe(res=>{
      this.expences=res;
    })
  }

  deleteExpence(id){
    this.expenceService.deleteExpence(id);
  }

}
