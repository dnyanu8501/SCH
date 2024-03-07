import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedPageComponent } from './borrowed-page.component';

describe('BorrowedPageComponent', () => {
  let component: BorrowedPageComponent;
  let fixture: ComponentFixture<BorrowedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
