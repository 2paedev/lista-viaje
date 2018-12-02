import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_ROUTES } from './utils/app-routes';

const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.HOME, pathMatch: 'full' },
  { path: APP_ROUTES.HOME, loadChildren: './home/home.module#HomePageModule' },
  {
    path: APP_ROUTES.NEW,
    loadChildren: './new-travel/new-travel.module#NewTravelPageModule'
  },
  {
    path: APP_ROUTES.DETAIL_ID,
    loadChildren: './detail/detail.module#DetailPageModule'
  }
  // {
  //   path: APP_ROUTES.DETAIL,
  //   loadChildren: './detail/detail.module#DetailPageModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
