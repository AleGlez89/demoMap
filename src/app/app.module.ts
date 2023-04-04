import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTransferModule } from './modules/data-transfer/data-transfer.module';
import { ManciventModule } from './modules/mancivent/mancivent.module';
import { CoreService } from './modules/data-transfer/services/coreServices/core.service';

export function loadCoreServices(coreService: CoreService) {
  return () => coreService.initialize();
}

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTransferModule,
    ManciventModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadCoreServices,
      multi: true,
      deps: [CoreService]
    },
    CoreService
  ]
})
export class AppModule { }
