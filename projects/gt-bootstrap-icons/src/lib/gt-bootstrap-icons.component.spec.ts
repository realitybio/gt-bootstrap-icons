import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtBootstrapIconsComponent } from './gt-bootstrap-icons.component';

describe('GtBootstrapIconsComponent', () => {
  let component: GtBootstrapIconsComponent;
  let fixture: ComponentFixture<GtBootstrapIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GtBootstrapIconsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GtBootstrapIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
