import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './user/register/register.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { MyOwnCustomMaterialModuleModule } from './my-own-custom-material-module/my-own-custom-material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserModule,
    RouterModule.forRoot([
      {path:'login', component: LoginComponent, pathMatch: 'full'},
      {path:'', redirectTo: 'login', pathMatch: 'full'},
      {path:'list', component: IssueListComponent },
      {path:'404', component: NotFoundComponent },
      {path:'*', redirectTo: '404' },
      {path:'**', redirectTo: '404' }, 
      {path:'view', component: LoginComponent }
    ]),
    MyOwnCustomMaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
