import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AssetList } from './asset-list';

describe('AssetList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetList],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AssetList);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});