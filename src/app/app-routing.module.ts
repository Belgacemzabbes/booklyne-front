import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ContentRoutes } from './shared/routes/content.routes';
import { FullRoutes } from './shared/routes/full.routes';

const routes: Routes =[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: ContentLayoutComponent,
    data: { title: 'Content views' },
    children: ContentRoutes,
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'full views',
    },
    children: FullRoutes,
  },
  // { path: 'index',                component: ComponentsComponent },
  // { path: 'nucleoicons',          component: NucleoiconsComponent },
  // { path: 'examples/landing',     component: LandingComponent },
  // { path: 'examples/login',       component: LoginComponent },
  // { path: 'examples/profile',     component: ProfileComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
