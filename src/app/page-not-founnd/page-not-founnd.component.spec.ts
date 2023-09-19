import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFounndComponent } from './page-not-founnd.component';

describe('PageNotFounndComponent', () => {
  let component: PageNotFounndComponent;
  let fixture: ComponentFixture<PageNotFounndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFounndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFounndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
