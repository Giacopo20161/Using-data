import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item/user-item.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserListComponent } from './user-list/user-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserItemComponent,HelloWorldComponent,UserListComponent], //importazione di User-Item
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-data';
}
