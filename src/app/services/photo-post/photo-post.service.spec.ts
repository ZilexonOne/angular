import { TestBed } from '@angular/core/testing';

import { PhotoPostService } from './photo-post.service';

describe('PhotoPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoPostService = TestBed.get(PhotoPostService);
    expect(service).toBeTruthy();
  });
});
