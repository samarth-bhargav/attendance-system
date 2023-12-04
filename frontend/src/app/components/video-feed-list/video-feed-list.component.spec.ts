import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoFeedListComponent } from './video-feed-list.component';

describe('VideoFeedListComponent', () => {
  let component: VideoFeedListComponent;
  let fixture: ComponentFixture<VideoFeedListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFeedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
