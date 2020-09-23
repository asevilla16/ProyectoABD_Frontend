import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMastersComponent } from './admin-masters/admin-masters.component';
import { EmployeeGuard } from './guards/empleado.guard';
import { SuperAdminGuard } from './guards/superadmin.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  { path: 'employee', component: UserComponent },
  { path: 'home', component: HomepageComponent },
  {
    path: 'superAdmin',
    component: SuperAdminDashboardComponent,
    canActivate: [SuperAdminGuard],
  },
  {
    path: 'admin',
    component: AdminMastersComponent,
    canActivate: [EmployeeGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
