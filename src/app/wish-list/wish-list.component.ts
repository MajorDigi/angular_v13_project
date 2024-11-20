import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/modules/wishItem'; // Import the WishItem type

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  @Input() wishes: WishItem[] = []; // Input for the array of WishItems

  // Computed property to get visible items
  get visibleItems(): WishItem[] {
    return this.wishes; // You can modify this to apply any filtering logic
  }

  // Method to handle item toggling
  toggleItem(item: WishItem): void {
    item.isComplete = !item.isComplete; // Toggle the `isComplete` property of the item
  }
}

