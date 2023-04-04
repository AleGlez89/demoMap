import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreManciventComponent } from './core-mancivent.component';

describe('CoreManciventComponent', () => {
  let component: CoreManciventComponent;
  let fixture: ComponentFixture<CoreManciventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreManciventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreManciventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
