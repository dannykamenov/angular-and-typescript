import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule // This is needed for the routerLink directive in the header.component.html
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent
  ]
})
export class CoreModule { }
