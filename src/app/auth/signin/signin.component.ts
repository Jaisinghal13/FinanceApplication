import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email;
  password;
  unseen:boolean=true;
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  signin(){
    this.auth.signin(this.email, this.password);
  }

  read(){
    if(this.unseen==true){
      this.unseen=false
      console.log(this.unseen)
    }
    else{
      this.unseen=true;
      console.log(this.unseen)
    }
  }

  signinwithgoogle(){
    this.auth.signinwithGoogle();
  }
}
