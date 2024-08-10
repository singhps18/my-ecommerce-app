import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComComponent } from './footer-com.component';

describe('FooterComComponent', () => {
  let component: FooterComComponent;
  let fixture: ComponentFixture<FooterComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
