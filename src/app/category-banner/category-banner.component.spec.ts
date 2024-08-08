import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CategoryBannerComponent } from './category-banner.component';

// Mock Router
class RouterStub {
  navigate(params: any[]) { }
}

describe('CategoryBannerComponent', () => {
  let component: CategoryBannerComponent;
  let fixture: ComponentFixture<CategoryBannerComponent>;
  let router: Router;
  let navigateSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryBannerComponent],
      providers: [
        { provide: Router, useClass: RouterStub } 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryBannerComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    navigateSpy = spyOn(router, 'navigate'); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Router.navigate on navigateToCategory', () => {
    const category = { name: 'Desserte de cuisine' };
    component.navigateToCategory(category);
    expect(navigateSpy).toHaveBeenCalledWith(['/category', category.name]);
  });

  it('should display categories in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    const categoryElements = compiled.querySelectorAll('.category-list div');
    expect(categoryElements.length).toBe(component.categories.length);
    expect(categoryElements[0].textContent).toContain('Desserte de cuisine');
  });
});
