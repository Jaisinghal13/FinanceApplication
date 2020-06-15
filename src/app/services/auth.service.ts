import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uid=null;
 // emailVerfied:boolean; 
  constructor(public route:Router,public auth:AngularFireAuth,public db:AngularFirestore) { 
    if(localStorage.getItem("uid")){
      this.uid=localStorage.getItem("uid")
    }
   if(!this.uid==null){
    this.auth.authState.subscribe(res=>{
      this.uid=res.uid;
      this.route.navigateByUrl('/home');
    })
   }
  }

  // signin(email,password){
  //   if(email==this.email && password==this.password){
  //     this.route.navigateByUrl('/home');
  //     this.isSignin=true;
  //   }
  //   else{
  //     alert("Wrong Password");
  //   }

  //}

  signin(email,password){
    //this.auth.sendSignInLinkToEmail(email)
    //if(this.emailVerfied){
    this.auth.signInWithEmailAndPassword(email,password).then(res=>{
      console.log(res)
      console.log(res.user.uid)
      if(res.user.emailVerified){
      if(res.user.uid){
        this.uid=res.user.uid;
        localStorage.setItem("uid",this.uid)
        this.route.navigateByUrl('/home');
      }
     }
      else{
        alert("Please Verify your email first to signin")
      }
    }).catch(err=>{
      alert(err);
      console.log(err)
    })
   
   
  }

  delete(){
    //this.auth.signInWithEmailAndPassword(email,pass)
    //.then(function (info) {
       let user = auth().currentUser;
       user.delete();
    //});
  }

   signinwithGoogle(){
     const provider = new auth.GoogleAuthProvider();
     this.auth.signInWithPopup(provider).then(res=>{
       console.log(res)
       console.log(res.user.uid)
       if(res.user.uid){
        this.uid=res.user.uid;
        localStorage.setItem("uid",this.uid)
        this.route.navigateByUrl('/home');
       }
     }).catch(err=>{
       console.log(err)
     })
  }

  //signinWithGoogleNew(){
    //  this.auth.signInWithRedirect(new auth.GoogleAuthProvider()).then(res=>{
    //  console.log(res)
    //  if(res.credi){
    //    this.route.navigateByUrl('/home');
    //  }
    // }) 

    // Using a redirect.
// this.auth.getRedirectResult().then(function(result) {
//   if (result.credential) {
    
//     var token = result.credential.providerId;
//   }
//   var user = result.user;
// });

// Start a sign in process for an unauthenticated user.
// var provider = new auth.GoogleAuthProvider();
// provider.addScope('profile');
// provider.addScope('email');
// this.auth.signInWithRedirect(provider);
//    }

  // signinWithGoogleNew(){
  //   let providers = new auth.GoogleAuthProvider()
  //   this.auth.signInWithRedirect(providers).then(res=>{
  //     console.log(res)
  //     this.uid=res;
  //       localStorage.setItem("uid",this.uid)
  //     this.route.navigateByUrl('/home')
  //   })
  // }

  logout(){
    console.log(this.uid)
    this.auth.signOut().then(res=>{
      this.uid=null;
      console.log(this.uid)
      localStorage.removeItem("uid");
      this.route.navigateByUrl('/auth')
    })
  }

  getAuthicated(){
    if(this.uid){
      return true;
    }
    else{
      return false;
    }
  }

  getUid(){
    return this.uid;
  }

  signup(email,password,name){
    
    this.auth.createUserWithEmailAndPassword(email,password).then(res=>{
      res.user.sendEmailVerification();
      alert("A mail is sent to your email please verify it before signin");
      //this.emailVerfied=res.user.emailVerified;
      this.db.collection("user").doc(res.user.uid).set({name:name})
    });

  }

  resetpassword(email){
    this.auth.sendPasswordResetEmail(email).then(res=>{
      this.route.navigateByUrl("/auth/signin")
      return res
    }).catch(err=>{
      return err
    })    
  }

  // getUserName(){
  //   console.log(this.uid)
  //   return this.db.collection("user").doc(this.uid).valueChanges()
  // }

  // setUserPhoto(name,photo,phoneNo){
  //   this.db.collection("user").doc(this.uid).update({name:name,PhotoURL:photo,phoneNo:phoneNo});
  // }  

  
}
