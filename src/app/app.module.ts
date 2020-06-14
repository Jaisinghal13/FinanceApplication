import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetComponent } from './auth/reset/reset.component';
import { HomeComponent } from './home/home.component';
import { ManageExpenceComponent } from './home/manage-expence/manage-expence.component';
import { ManageCategoriesComponent } from './home/manage-categories/manage-categories.component';
import { ExpenceSummaryComponent } from './home/expence-summary/expence-summary.component';
import { AddExpenceComponent } from './home/manage-expence/add-expence/add-expence.component';
import { EditExpenceComponent } from './home/manage-expence/edit-expence/edit-expence.component';
import { AllExpenceComponent } from './home/manage-expence/all-expence/all-expence.component';
import { AddCategoryComponent } from './home/manage-categories/add-category/add-category.component';
import { EditCategoryComponent } from './home/manage-categories/edit-category/edit-category.component';
import { AllCategoryComponent } from './home/manage-categories/all-category/all-category.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthGuardService } from './services/auth-guard.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProfileComponent } from './home/profile/profile.component';
import { AboutusComponent } from './home/profile/aboutus/aboutus.component';
import { EditComponent } from './home/profile/edit/edit.component';
import { HelpComponent } from './home/profile/help/help.component';
import { UserProfileComponent } from './home/profile/user-profile/user-profile.component';
// import * as firebase from 'firebase/app'
// import 'firebase/auth';        // for authentication
// import 'firebase/storage';     // for storage
// import 'firebase/database';    // for realtime database
// import 'firebase/firestore';   // for cloud firestore
// import 'firebase/messaging';   // for cloud messaging
// import 'firebase/functions';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ResetComponent,
    HomeComponent,
    ManageExpenceComponent,
    ManageCategoriesComponent,
    ExpenceSummaryComponent,
    AddExpenceComponent,
    EditExpenceComponent,
    AllExpenceComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AllCategoryComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    AboutusComponent,
    EditComponent,
    HelpComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
