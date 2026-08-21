import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asset } from './asset.model';

@Injectable({ providedIn: 'root' })
export class AssetService {
  private apiUrl = 'http://localhost:5166/api/assets'; // match your API's port

  constructor(private http: HttpClient) {}

  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.apiUrl);
  }

  addAsset(asset: Asset): Observable<Asset> {
    return this.http.post<Asset>(this.apiUrl, asset);
  }

  updateAsset(asset: Asset): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${asset.id}`, asset);
  }

  deleteAsset(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}