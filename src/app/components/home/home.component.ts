import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiHelperService } from '../../service/api-helper.service';
import { BlogData } from '../../utils/interface';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  blogs!: BlogData[];

  constructor(
    private apiHelper: ApiHelperService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.apiHelper.getBlogs().subscribe((data)=>{
      this.blogs = [...data.data]
    })
  }

  deleteBlog(id:string) {
    this.apiHelper.deleteBlog(id).subscribe((data)=>{
      this.snackBar.open("Deleted Blog", "Okay", {
        duration: 1000
      });
    })
  }
}
