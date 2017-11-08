import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageuploadsComponent } from './imageuploads.component';

describe('ImageuploadsComponent', () => {
  let component: ImageuploadsComponent;
  let fixture: ComponentFixture<ImageuploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageuploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageuploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
