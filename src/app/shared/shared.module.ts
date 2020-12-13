import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackEndMessageComponent } from './components/back-end-message/back-end-message.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from "../app-routing.module";




@NgModule({
  declarations: [BackEndMessageComponent, SpinnerComponent, HeaderComponent],
  imports: [
    CommonModule,AppRoutingModule
  ],
    exports: [
        BackEndMessageComponent,
        SpinnerComponent,
        HeaderComponent,
    ]
})
export class SharedModule { }
