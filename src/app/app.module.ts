import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { AdminMastersComponent } from './admin-masters/admin-masters.component';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomepageComponent,
    SuperAdminDashboardComponent,
    AdminMastersComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 
  ],
  exports: [
    UserComponent,
  ],
  providers: [
    UserService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
