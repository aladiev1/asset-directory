import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Asset } from '../asset.model';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './asset-list.html',
})
export class AssetListComponent implements OnInit {
  assets: Asset[] = [];
  newAsset: Asset = { name: '', category: '', assignedTo: '' };
  editingAsset: Asset | null = null;

  constructor(
    private assetService: AssetService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAssets();
  }

  loadAssets(): void {
    this.assetService.getAssets().subscribe(data => {
      this.assets = data;
      this.cdr.detectChanges();
    });
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