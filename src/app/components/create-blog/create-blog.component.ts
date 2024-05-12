import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatDividerModule
  ],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss',
})
export class CreateBlogComponent { }
