import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogData } from '../utils/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  BASE_API_URL = "http://localhost:3000/";

  constructor(
    private http: HttpClient
  ) { }

  getSampleData() {
    return this.http.get(this.BASE_API_URL+"blogs");
  }

  getBlogs() {
    return this.http.get<{data:BlogData[]}>(this.BASE_API_URL+"blogs");
  }

  getSingleBlog(id: string) {
    return this.http.get<BlogData>(this.BASE_API_URL+'blogs/'+id);
  }

  createBlog(data: BlogData) {
    return this.http.post<BlogData>(this.BASE_API_URL+"blogs", data);
  }

  deleteBlog(id: string) {
    return this.http.delete<{message: string}>(this.BASE_API_URL+`blogs/${id}`);
  }

}
