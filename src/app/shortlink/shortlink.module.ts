import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortlinkRoutingModule } from './shortlink-routing.module';
import { InputLinkComponent } from './input-link/input-link.component';
import { OutputLinkComponent } from './output-link/output-link.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    InputLinkComponent,
    OutputLinkComponent
  ],
  imports: [
    CommonModule,
    ShortlinkRoutingModule,
    FormsModule
  ]
})
export class ShortlinkModule { }
