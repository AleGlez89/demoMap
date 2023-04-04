import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { SharedServiceService } from 'src/app/modules/data-transfer/services/sharedServices/shared-service.service';

@Component({
  selector: 'app-modals',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit  {

  name = 'Angular';
  @ViewChild("content",{static:true}) content!:ElementRef;

  constructor(
    private serviceShared: SharedServiceService,
    private modalService:NgbModal
  ) {} 

  ngOnInit(): void {
    this.initialize();
  } 
  private initialize (): void {
    this.serviceShared.sharingSelectedMarker
    .pipe(
      filter((marker)=>{return marker.id !== 'null'}),
    )
    .subscribe(() => {this.openModal(this.content)});    
  }
  private openModal(content: any) {
		this.modalService.open(content, { centered: true });
	}
}