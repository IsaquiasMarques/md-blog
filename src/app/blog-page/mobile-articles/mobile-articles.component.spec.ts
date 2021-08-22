import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileArticlesComponent } from './mobile-articles.component';

describe('MobileArticlesComponent', () => {
  let component: MobileArticlesComponent;
  let fixture: ComponentFixture<MobileArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
