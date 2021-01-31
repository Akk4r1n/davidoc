import { TestBed } from '@angular/core/testing';

import { MyMarkdownService } from './myMarkdown.service';

describe('MyMarkdownService', () => {
  let service: MyMarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyMarkdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
