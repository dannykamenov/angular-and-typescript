import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AppEmailDirective } from './validators/app-email.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    AppEmailDirective,
    ShortenPipe,
    ElapsedTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    AppEmailDirective,
    ShortenPipe
  ]
})
export class SharedModule { }
