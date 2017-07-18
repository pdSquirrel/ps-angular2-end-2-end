import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './adminComponent/admin.component';
import { AdminMenuComponent } from "./adminMenu/admin-menu.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/sign-up.component";

import { UserService } from './adminShared/user.service';

const AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', component: AdminMenuComponent, canActivate: [UserService] }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AdminComponent,
    AdminMenuComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [
    UserService
  ]
})

export class AdminModule {}
