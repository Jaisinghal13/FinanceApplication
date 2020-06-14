import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user;
  userPhotoExist:boolean=false;
  constructor(public profileService:ProfileService,public route:Router,public authService:AuthService) { }

  ngOnInit(): void {
    this.profileService.getUserProfile().subscribe(res=>{
      this.user=res;
      if(this.user.PhotoURL!=null){
        this.userPhotoExist=true;
      }
      console.log(res);
    })
  }
  delete(){
    this.authService.delete();
    this.route.navigateByUrl('/auth');
  }
  logout(){
    this.authService.logout();
  }

}
