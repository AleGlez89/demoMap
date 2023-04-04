import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ClientsComponent } from './components/common/components/modals/clients.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreManciventComponent } from './components/core-mancivent/core-mancivent.component';
import { MapsModule } from '../maps/maps.module';
import { ManagementClientsComponent } from './components/management-clients/management-clients.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    ClientsComponent,
    CoreManciventComponent,
    ManagementClientsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
    MapsModule
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    ClientsComponent,
    CoreManciventComponent
  ]
})
export class ManciventModule { }
