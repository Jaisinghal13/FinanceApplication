import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email;
  password;
  name;
  unseen:boolean=true;

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  signup(){
    this.auth.signup(this.email,this.password,this.name)
  }

  read(){
    if(this.unseen==true){
      this.unseen=false;
    }
    else{
      this.unseen=true;
    }
  }
}
