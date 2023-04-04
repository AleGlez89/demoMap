import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AgmMarkerClustererModule } from '@agm/markerclusterer';
import { MapsComponent } from './components/mapsGlobal/maps.component';
import { HeaderComponent } from '../mancivent/components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClientsComponent } from '../mancivent/components/common/components/modals/clients.component';
import { ManciventModule } from '../mancivent/mancivent.module';
@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      //apiKey: 'AIzaSyAeVs5kr4AKUOGoAdLMNlHDun9_0dyv0JA'
      apiKey: ''
    }),    
    AgmMarkerClustererModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MapsComponent
  ]
})
export class MapsModule {}