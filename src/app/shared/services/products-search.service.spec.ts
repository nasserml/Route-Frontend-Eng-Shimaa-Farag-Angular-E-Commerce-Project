import { TestBed } from '@angular/core/testing';

import { ProductsSearchService } from './products-search.service';

describe('ProductsSearchService', () => {
  let service: ProductsSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
