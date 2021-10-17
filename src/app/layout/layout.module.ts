import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopFooterComponent } from './top-footer/top-footer.component';
import { FooterComponent } from './footer/footer.component';


const COMPONENTS=
  [ 
    TopHeaderComponent,
    NavbarComponent,
    TopFooterComponent,
    FooterComponent
  ]
@NgModule({
  declarations: [COMPONENTS

  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
