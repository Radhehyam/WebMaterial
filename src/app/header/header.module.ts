import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopheaderComponent } from './topheader/topheader.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [TopheaderComponent, NavbarComponent],  // Declare TopHeaderComponent here
  imports: [CommonModule],             // Import CommonModule
  exports: [TopheaderComponent,NavbarComponent]        // Export it so it can be used in other modules (like AppModule)
})
export class HeaderModule { }
