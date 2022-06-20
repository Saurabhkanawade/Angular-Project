import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadOexcelComponent } from './download-oexcel.component';

describe('DownloadOexcelComponent', () => {
  let component: DownloadOexcelComponent;
  let fixture: ComponentFixture<DownloadOexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadOexcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadOexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
