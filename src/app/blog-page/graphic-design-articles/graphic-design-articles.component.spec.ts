import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignArticlesComponent } from './graphic-design-articles.component';

describe('GraphicDesignArticlesComponent', () => {
  let component: GraphicDesignArticlesComponent;
  let fixture: ComponentFixture<GraphicDesignArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicDesignArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesignArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
