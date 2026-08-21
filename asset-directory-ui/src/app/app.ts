import { Component } from '@angular/core';
import { AssetListComponent } from './asset-list/asset-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AssetListComponent],
  templateUrl: './app.html',
})
export class App {}