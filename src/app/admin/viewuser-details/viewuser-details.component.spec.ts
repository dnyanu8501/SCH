import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserDetailsComponent } from './viewuser-details.component';

describe('ViewuserDetailsComponent', () => {
  let component: ViewuserDetailsComponent;
  let fixture: ComponentFixture<ViewuserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewuserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
