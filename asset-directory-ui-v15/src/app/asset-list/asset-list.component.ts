import { Component, OnInit } from '@angular/core';
import { Asset } from '../asset.model';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
})
export class AssetListComponent implements OnInit {
  assets: Asset[] = [];
  newAsset: Asset = { name: '', category: '', assignedTo: '' };
  editingAsset: Asset | null = null;

  constructor(private assetService: AssetService) {}

  ngOnInit(): void {
    this.loadAssets();
  }

  loadAssets(): void {
    this.assetService.getAssets().subscribe((data) => (this.assets = data));
  }

  addAsset(): void {
    this.assetService.addAsset(this.newAsset).subscribe(() => {
      this.newAsset = { name: '', category: '', assignedTo: '' };
      this.loadAssets();
    });
  }

  startEdit(asset: Asset): void {
    this.editingAsset = { ...asset };
  }

  saveEdit(): void {
    if (!this.editingAsset) return;
    this.assetService.updateAsset(this.editingAsset).subscribe(() => {
      this.editingAsset = null;
      this.loadAssets();
    });
  }

  cancelEdit(): void {
    this.editingAsset = null;
  }

  deleteAsset(id: number): void {
    this.assetService.deleteAsset(id).subscribe(() => this.loadAssets());
  }
}