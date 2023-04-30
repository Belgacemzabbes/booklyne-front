import { Routes } from "@angular/router";

export const FullRoutes: Routes = [
  {
    path: 'full',
    loadChildren: () => 
      import('../../components/appointments/appointments.module').then((m) => m.AppointmentsModule)
  }
]