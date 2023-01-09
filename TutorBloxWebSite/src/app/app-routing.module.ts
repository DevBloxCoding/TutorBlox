import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component';
import { ForgotpasswordpageComponent } from './forgotpasswordpage/forgotpasswordpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PublicwebsiteComponent } from './publicwebsite/publicwebsite.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ResetpasswordpageComponent } from './resetpasswordpage/resetpasswordpage.component';
import { TutordashboardComponent } from './tutordashboard/tutordashboard.component';

const routes: Routes = [
  { path: '', component: PublicwebsiteComponent },
  { path: 'publicwebsite', component: PublicwebsiteComponent },
  { path: 'clientdashboard', component: ClientdashboardComponent },
  { path: 'tutordashboard', component: TutordashboardComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'registerpage', component: RegisterpageComponent },
  { path: 'forgotpasswordpage', component: ForgotpasswordpageComponent },
  { path: 'resetpasswordpage', component: ResetpasswordpageComponent },
  { path: 'registerpage', component: RegisterpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
