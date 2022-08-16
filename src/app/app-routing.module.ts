import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
    {path: '', 
    redirectTo: '/welcome/home',
    pathMatch: 'full'
   },
  
    { path: 'welcome', loadChildren: () => import('./Module/main-application/main-application.module').then(m => m.MainApplicationModule) },
  
    { path: 'admin', loadChildren: () => import('./Module/admin/admin.module').then(m => m.AdminModule) }
  ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
