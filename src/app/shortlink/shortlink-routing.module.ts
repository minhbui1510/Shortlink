import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShortlinkComponent} from "./shortlink.component";
import {InputLinkComponent} from "./input-link/input-link.component";

const routes: Routes = [
  {
    path: '',
    component: ShortlinkComponent,
    children: [
      {
        path: 'input-link',
        component: InputLinkComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortlinkRoutingModule { }
