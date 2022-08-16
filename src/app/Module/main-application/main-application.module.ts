import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainApplicationRoutingModule } from './main-application-routing.module';
import { MainApplicationComponent } from './main-application.component';
import { NavigationBarreComponent } from 'src/app/Module/main-application/composants/navigation-barre/navigation-barre.component';
import { AlerteAnnonceComponent } from './composants/alerte-annonce/alerte-annonce.component';
import { AuthentificationPageComponent } from './composants/authentification-page/authentification-page.component';
import { CreateAnnonceComponent } from './composants/create-annonce/create-annonce.component';
import { HelpPageComponent } from './composants/help-page/help-page.component';
import { HomeComponent } from './composants/home/home.component';
import { SearchAnnonceComponent } from './composants/search-annonce/search-annonce.component';
import { SearchBoiteFormComponent } from './composants/search-boite-form/search-boite-form.component';
import { TopCategorieAnnonceComponent } from './composants/top-categorie-annonce/top-categorie-annonce.component';
import { MatCardModule } from '@angular/material/card';
import { TestComponent } from './composants/test/test.component';
import { TopAnnoncePrevBouttonDirective } from './directives/top-annonce-prev-boutton.directive';

import {MatSliderModule} from '@angular/material/slider';
import { SliderBienvenuComponent } from './composants/slider-bienvenu/slider-bienvenu.component';
import { AnnonceSearchBoiteComponent } from './composants/annonce-search-boite/annonce-search-boite.component';
import { AnnonceSearchFormComponent } from './composants/annonce-search-form/annonce-search-form.component';
import { CarteBurkinaComponent } from './composants/carte-burkina/carte-burkina.component';
import { TopCategorieTitleComponent } from './composants/top-categorie-title/top-categorie-title.component';
import { TopCaterogieAnnonceTitleComponent } from './composants/top-caterogie-annonce-title/top-caterogie-annonce-title.component';
import { CarteBurkinaTitleComponent } from './composants/carte-burkina-title/carte-burkina-title.component';
import { TopCategorieComponent } from './composants/top-categorie/top-categorie.component';
import { PresentationPartenaireComponent } from './composants/presentation-partenaire/presentation-partenaire.component';
import { HomeFooterComponent } from './composants/home-footer/home-footer.component';
import { RegisterComponent } from './composants/register/register.component';
import { FormulaireDepotAnnonceComponent } from './composants/formulaire-depot-annonce/formulaire-depot-annonce.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainApplicationComponent,
    HomeComponent,
    NavigationBarreComponent,
    CreateAnnonceComponent,
    SearchAnnonceComponent,
    AuthentificationPageComponent,
    AlerteAnnonceComponent,
    HelpPageComponent,
    SearchBoiteFormComponent,
    TopCategorieAnnonceComponent,
    TopAnnoncePrevBouttonDirective,
    TestComponent,
    SliderBienvenuComponent,
    AnnonceSearchBoiteComponent,
    AnnonceSearchFormComponent,
    CarteBurkinaComponent,
    TopCategorieTitleComponent,
    TopCaterogieAnnonceTitleComponent,
    CarteBurkinaTitleComponent,
    TopCategorieComponent,
    PresentationPartenaireComponent,
    HomeFooterComponent,
    RegisterComponent,
    FormulaireDepotAnnonceComponent
    
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatSliderModule,
    MainApplicationRoutingModule
  ]
})
export class MainApplicationModule { }
