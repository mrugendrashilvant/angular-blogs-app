import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiHelperService } from '../../service/api-helper.service';
import { ActivatedRoute } from '@angular/router';
import { BlogData } from '../../utils/interface';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.scss',
})
export class SingleBlogComponent {
  blog!: BlogData;

  constructor(
    private apiHelper: ApiHelperService,
    private route: ActivatedRoute
  ){
    route.params.subscribe((params)=>{
      console.log(params);
      this.getData(params["id"]);
    })
  }

  getData(id: string) {
    this.apiHelper.getSingleBlog(id).subscribe((data)=>{
      this.blog = {...data};
    })
  }

}
