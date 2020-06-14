import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user;
  userName;
  phoneNo;
  imagePath;
  imgURL;
  message: string;
  userPhotoExist:boolean=false;

  constructor(public profileService:ProfileService,public router:Router) { }

  ngOnInit(): void {
    this.profileService.getUserProfile().subscribe(res=>{
      this.user=res;
      if(this.user.PhotoURL!=null){
        this.userPhotoExist=true;
      }
      console.log(res);
    })
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.user.PhotoURL = reader.result;    
    }
  }

  onSubmit(){  
    this.profileService.setUserEditedProfile(this.user); 
    this.router.navigateByUrl('/home/profile');   
  }
}
