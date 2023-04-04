import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementClientsComponent } from './management-clients.component';

describe('ManagementClientsComponent', () => {
  let component: ManagementClientsComponent;
  let fixture: ComponentFixture<ManagementClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
