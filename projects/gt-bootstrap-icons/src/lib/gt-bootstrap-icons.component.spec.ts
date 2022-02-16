import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtBootstrapIconComponent } from './gt-bootstrap-icon.component';

describe('GtBootstrapIconsComponent', () => {
  let component: GtBootstrapIconComponent;
  let fixture: ComponentFixture<GtBootstrapIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GtBootstrapIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GtBootstrapIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
