import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { AssetService } from './asset.service';

describe('AssetService', () => {
  let service: AssetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssetService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AssetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('fetches assets via GET', () => {
    const mockAssets = [{ id: 1, name: 'Laptop', category: 'Hardware', assignedTo: 'J. Smith' }];

    service.getAssets().subscribe((assets) => {
      expect(assets).toEqual(mockAssets);
    });

    const req = httpMock.expectOne('http://localhost:5166/api/assets');
    expect(req.request.method).toBe('GET');
    req.flush(mockAssets);
  });
});