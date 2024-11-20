// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { WishItem } from '../../shared/modules/wishItem'; // Import the WishItem model

// @Component({
//   selector: 'add-wish-form',
//   templateUrl: './add-wish-form.component.html',
//   styleUrls: ['./add-wish-form.component.css']
// })
// export class AddWishFormComponent implements OnInit {
//   @Output() addwish = new EventEmitter<WishItem>();
//   constructor() { }

//   ngOnInit(): void {
//   }


//   newWishText = ''; // Text input for new wish item

//   // Method to add a new wish item to the list
//   addNewWish() {
    
//     this.addwish.emit(new WishItem(this.newWishText));
//     this.newWishText = ''; // Clear the input field after adding
//   }


// }


import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/modules/wishItem'; // Ensure the path is correct

@Component({
  selector: 'add-wish-form', // Selector matches the template usage
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent implements OnInit {
  @Output() addWish = new EventEmitter<WishItem>(); // Use PascalCase for consistency

  newWishText: string = ''; // Initialize with an empty string

  constructor() {}

  ngOnInit(): void {}

  // Method to add a new wish item to the list
  addNewWish(): void {
    // Validate input to prevent emitting empty or invalid wish
    if (this.newWishText.trim()) {
      this.addWish.emit(new WishItem(this.newWishText.trim())); // Emit valid WishItem
      this.newWishText = ''; // Clear the input field after adding
    }
  }
}
