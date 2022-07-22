import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListButtonDeleteAllComponent } from './list-button-delete-all.component';

describe('ListButtonDeleteAllComponent', () => {
  let component: ListButtonDeleteAllComponent;
  let fixture: ComponentFixture<ListButtonDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListButtonDeleteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
