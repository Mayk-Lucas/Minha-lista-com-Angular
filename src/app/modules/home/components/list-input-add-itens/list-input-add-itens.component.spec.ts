import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInputAddItensComponent } from './list-input-add-itens.component';

describe('ListInputAddItensComponent', () => {
  let component: ListInputAddItensComponent;
  let fixture: ComponentFixture<ListInputAddItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInputAddItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInputAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
