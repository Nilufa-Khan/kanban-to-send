import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BoardComponent } from './components/board/board.component';
import { CreateNewBoardComponent } from './components/create-new-board/create-new-board.component';
import { CreateComponent } from './components/create/create.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayComponent } from './components/display/display.component';
import { ExistingBoardComponent } from './components/existing-board/existing-board.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'dash',component:DashboardComponent},
  {path:'exisboard',component:ExistingBoardComponent},
  {path:'navbar',component:Navbar2Component},
  {path:'newboard',component:CreateNewBoardComponent},
  {path:'adminboard',component:BoardComponent},
  {path:'create',component:CreateComponent},
  {path:'home',component:HomeComponent},
  {path:'display',component:DisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
