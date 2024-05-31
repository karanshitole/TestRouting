import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import{MatSnackBarModule}from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserComponent } from './shared/components/user/user.component';
import { EditUserComponent } from './shared/components/edit-user/edit-user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { FairDashboardComponent } from './shared/components/fair-dashboard/fair-dashboard.component';
import { FairCardComponent } from './shared/components/fair-dashboard/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/components/fair-dashboard/fair-details/fair-details.component';
import { AuthComponent } from './shared/components/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    PageNotFoundComponent,
    UserComponent,
    EditUserComponent,
    ProductComponent,
    ProductFormComponent,
    ConfirmDialogComponent,
    FairDashboardComponent,
    FairCardComponent,
    FairDetailsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
