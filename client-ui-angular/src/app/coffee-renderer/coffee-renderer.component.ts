import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Coffee } from '@app/core/api/interfaces';
import { ItemRenderer } from '@list/core/interfaces';

@Component({
  selector: 'app-coffee-renderer',
  templateUrl: './coffee-renderer.component.html',
  styleUrls: ['./coffee-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeRendererComponent implements ItemRenderer<Coffee> {
  @Input() item: Coffee;
  @Input() itemHeightPx: number;
}
