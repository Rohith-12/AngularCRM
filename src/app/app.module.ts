import { BrowserModule } from "@angular/platform-browser";
import { Route, RouterModule, Routes } from "@angular/router";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
 
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { AddUserFormComponent } from "./add-user-form/add-user-form.component";
import { AdduserComponent } from "./adduser/adduser.component";
import { FollowuplistComponent } from "./followuplist/followuplist.component";
import { AddleadComponent } from "./addlead/addlead.component";
import { LeadlistComponent } from "./leadlist/leadlist.component";
import { BackdropComponent } from "./backdrop/backdrop.component";
import { FollowupviewComponent } from "./followupview/followupview.component";
import {HttpClientModule} from "@angular/common/http"
import { LoginComponent } from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import { CheckPasswordDirective } from './check-password.directive';
import { DummyformComponent } from './dummyform/dummyform.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

const crmroutes: Routes = [

  { path: "", component:SignupComponent },
  { path: "Login", component: LoginComponent },
  { path: "AddUser", component: AdduserComponent },
  { path: "AddLead", component: AddleadComponent },
  { path: "UserForm", component: AddUserFormComponent },
  { path: "LeadlistComponent", component: LeadlistComponent },
  { path: "FollowuplistComponent", component: FollowuplistComponent },
  { path: "Followupview", component: FollowupviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddUserFormComponent,
    AdduserComponent,
    HeaderComponent,
    AddleadComponent,
    LeadlistComponent,
    BackdropComponent,
    FollowuplistComponent,
    FollowupviewComponent,
    LoginComponent,
    SignupComponent,
    CheckPasswordDirective,
    DummyformComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(crmroutes), NoopAnimationsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
