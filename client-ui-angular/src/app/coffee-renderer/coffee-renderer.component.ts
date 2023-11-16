import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Coffee } from '@app/core/api/interfaces';
import { ListItemRenderer } from '@list/core/interfaces';

@Component({
  selector: 'app-coffee-renderer',
  templateUrl: './coffee-renderer.component.html',
  styleUrls: ['./coffee-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeRendererComponent implements ListItemRenderer<Coffee> {
  @Input() item: Coffee;
  @Input() itemHeightPx: number;
}
