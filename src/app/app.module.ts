import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // BrowserModule is needed for the app to run in a browser
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AppComponent } from './app.component'; // Import AppComponent
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component'; // Import your custom component

@NgModule({
  declarations: [
    AppComponent, // Declare the AppComponent here
    WishListComponent,
    AddWishFormComponent, // Declare WishListComponent here
  ],
  imports: [
    BrowserModule, // BrowserModule is required for all applications
    FormsModule, // Include FormsModule for two-way data binding
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstrap the AppComponent
})
export class AppModule {}
