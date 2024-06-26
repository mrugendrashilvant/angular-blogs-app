import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
} from '@angular/material/dialog';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MatSlideToggleModule, HttpClientModule, MatToolbarModule, MatButtonModule]
})
export class AppComponent {
  title = 'My new blogs app!';

  constructor(
    public dialog: MatDialog
  ) {

  }

  openDialog() {
    this.dialog.open(CreateBlogComponent, {
      width: "600px",
    })
  }
}
