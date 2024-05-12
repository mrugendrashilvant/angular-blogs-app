import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiHelperService } from '../../service/api-helper.service';
import { BlogData } from '../../utils/interface';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BlogComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  blogs!: BlogData[];

  constructor(
    private apiHelper: ApiHelperService,
  ) {
  }

  ngOnInit(): void {
    this.apiHelper.getBlogs().subscribe((data)=>{
      this.blogs = [...data.data]
    })
  }
}
