import { Component } from '@angular/core';
import { AssetList } from './asset-list/asset-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AssetList],
  templateUrl: './app.html',
})
export class App {}