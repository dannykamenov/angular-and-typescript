import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AppEmailDirective } from './validators/app-email.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { DateTransformPipe } from './pipes/date-transform.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    AppEmailDirective,
    ShortenPipe,
    ElapsedTimePipe,
    DateTransformPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    AppEmailDirective,
    ShortenPipe,
    ElapsedTimePipe,
    DateTransformPipe
  ]
})
export class SharedModule { }
