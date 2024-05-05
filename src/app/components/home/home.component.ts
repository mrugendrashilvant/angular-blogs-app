import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiHelperService } from '../../service/api-helper.service';
import { BlogData } from '../../utils/interface';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  blogs!: BlogData[];

  constructor(
    private apiHelper: ApiHelperService
  ) {
  }

  ngOnInit(): void {
    this.apiHelper.getBlogs().subscribe((data)=>{
      this.blogs = [...data.data]
    })
  }
}
