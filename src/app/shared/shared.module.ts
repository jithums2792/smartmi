import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PopoverModule } from 'ngx-smart-popover';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule, PopoverModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
})
export class SharedModule {}
