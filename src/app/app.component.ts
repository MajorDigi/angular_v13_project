import { Component } from '@angular/core';
import { WishItem } from '../shared/modules/wishItem'; // Import the WishItem model

const filters = [
  (item: WishItem) => item, // Default filter: returns all items
  (item: WishItem) => !item.isComplete, // Filter for incomplete items
  (item: WishItem) => item.isComplete, // Filter for completed items
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Initial list of wish items
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  listFilter: any = '0'; // Default filter: show all items
  newWishText = ''; // Text input for new wish item
  title = 'angular_Wishlist'; // Title of the app

  // Getter to return filtered items based on the selected filter
  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }

  // Method to add a new wish item to the list
  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = ''; // Clear the input field after adding
  }

  // Method to toggle the completion status of an item
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item); // Log the updated item for debugging purposes
  }
}
