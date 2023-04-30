import { Routes } from "@angular/router";

export const FullRoutes: Routes = [
  {
    path: '',
    loadChildren: () => 
      import('../../components/components.module').then((m) => m.ComponentsModule)
  }
]