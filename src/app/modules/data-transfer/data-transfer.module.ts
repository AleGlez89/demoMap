import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ManciventService } from './services/manciventServices/mancivent.service';


@NgModule({ 
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],  
  providers: [
    //ManciventService    
  ],
})
export class DataTransferModule { }
