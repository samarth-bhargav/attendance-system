import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoFeedPreviewComponent } from './video-feed-preview.component';

describe('VideoFeedPreviewComponent', () => {
  let component: VideoFeedPreviewComponent;
  let fixture: ComponentFixture<VideoFeedPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFeedPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFeedPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
