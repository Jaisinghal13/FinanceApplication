import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetComponent } from './auth/reset/reset.component';
import { HomeComponent } from './home/home.component';
import { ManageCategoriesComponent } from './home/manage-categories/manage-categories.component';
import { AddCategoryComponent } from './home/manage-categories/add-category/add-category.component';
import { EditCategoryComponent } from './home/manage-categories/edit-category/edit-category.component';
import { AllCategoryComponent } from './home/manage-categories/all-category/all-category.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ManageExpenceComponent } from './home/manage-expence/manage-expence.component';
import { AllExpenceComponent } from './home/manage-expence/all-expence/all-expence.component';
import { AddExpenceComponent } from './home/manage-expence/add-expence/add-expence.component';
import { EditExpenceComponent } from './home/manage-expence/edit-expence/edit-expence.component';
import { ExpenceSummaryComponent } from './home/expence-summary/expence-summary.component';
import { ProfileComponent } from './home/profile/profile.component';
import { EditComponent } from './home/profile/edit/edit.component';
import { AboutusComponent } from './home/profile/aboutus/aboutus.component';
import { HelpComponent } from './home/profile/help/help.component';
import { UserProfileComponent } from './home/profile/user-profile/user-profile.component';


const routes: Routes = [
  {path:"auth",component:AuthComponent , children:[
    {path:"",component:SigninComponent},
    {path:"signin",component:SigninComponent},
    {path:"signup",component:SignupComponent},
    {path:"reset-password",component:ResetComponent},
  ]},
  {path:"home",component:HomeComponent , canActivate:[AuthGuardService] , children:[
    {path:"",component:DashboardComponent},
    {path:"manage-categories",component:ManageCategoriesComponent , children:[
      {path:"",component:AllCategoryComponent},
      {path:"add-category",component:AddCategoryComponent},
      {path:"edit-category/:id",component:EditCategoryComponent},
      {path:"all-category",component:AllCategoryComponent}      
    ]},
    {path:"manage-expencies",component:ManageExpenceComponent,children:[
      {path:"",component:AllExpenceComponent},
      {path:"add-expence",component:AddExpenceComponent},
      {path:"edit-expence/:id",component:EditExpenceComponent}
    ]},
    {path:"expence-summary",component:ExpenceSummaryComponent},
    {path:"profile",component:ProfileComponent,children:[
      {path:"",component:UserProfileComponent},
      {path:"edit",component:EditComponent},
      {path:"help",component:HelpComponent},
      {path:"about-us",component:AboutusComponent}
    ]}
  ]},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path:"**",component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
