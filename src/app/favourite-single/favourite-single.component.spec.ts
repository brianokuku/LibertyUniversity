import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteSingleComponent } from './favourite-single.component';

describe('FavouriteSingleComponent', () => {
  let component: FavouriteSingleComponent;
  let fixture: ComponentFixture<FavouriteSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
