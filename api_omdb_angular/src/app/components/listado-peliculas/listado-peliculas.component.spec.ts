import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeliculasComponent } from './listado-peliculas.component';

describe('ListadoPeliculasComponent', () => {
  let component: ListadoPeliculasComponent;
  let fixture: ComponentFixture<ListadoPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoPeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
