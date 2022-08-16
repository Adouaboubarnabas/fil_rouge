import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlerteAnnonceComponent } from 'src/app/Module/main-application/composants/alerte-annonce/alerte-annonce.component';
import { MainApplicationComponent } from './main-application.component';
import { CreateAnnonceComponent } from './composants/create-annonce/create-annonce.component';
import { AuthentificationPageComponent } from './composants/authentification-page/authentification-page.component';
import { HelpPageComponent } from './composants/help-page/help-page.component';
import { SearchAnnonceComponent } from './composants/search-annonce/search-annonce.component';
import { HomeComponent } from './composants/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainApplicationComponent,
    children: [
      { path: '', redirectTo: '/welcome/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'create-annonce', component: CreateAnnonceComponent },
      { path: 'search-annonce', component: SearchAnnonceComponent },
      { path: 'authentification', component: AuthentificationPageComponent },
      { path: 'mes-alertes', component: AlerteAnnonceComponent },
      { path: 'aides', component: HelpPageComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainApplicationRoutingModule { }
