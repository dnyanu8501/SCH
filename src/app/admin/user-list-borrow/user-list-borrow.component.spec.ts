import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListBorrowComponent } from './user-list-borrow.component';

describe('UserListBorrowComponent', () => {
  let component: UserListBorrowComponent;
  let fixture: ComponentFixture<UserListBorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListBorrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListBorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
