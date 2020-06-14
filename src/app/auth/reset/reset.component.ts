import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  email;
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

  resetPassword(){
    this.authService.resetpassword(this.email)
  }
}
