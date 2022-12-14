import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroCompComponent } from './libro-comp.component';

describe('LibroCompComponent', () => {
  let component: LibroCompComponent;
  let fixture: ComponentFixture<LibroCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
