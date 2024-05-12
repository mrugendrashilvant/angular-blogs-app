import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ApiHelperService } from '../../service/api-helper.service';
import { BlogData } from '../../utils/interface';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss',
})
export class CreateBlogComponent {
  blogForm = new FormGroup({
    title: new FormControl('', Validators.required),
    tags: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    image: new FormControl('' as any, Validators.required)
  });

  constructor(
    private api: ApiHelperService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
    ){}

  onSubmit(ev:SubmitEvent) {
    this.blogForm.markAllAsTouched();
    if(this.blogForm.invalid) return;
    let data = {
      title: this.blogForm.controls.title.value??"",
      blogContent: this.blogForm.controls.content.value??"",
      hashTags: this.blogForm.controls.tags.value?.split(",")??[],
      image: this.blogForm.controls.image.value??""
    } as BlogData
    this.api.createBlog(data as BlogData).subscribe((data:BlogData) => {
      this.dialog.closeAll();
      this.snackbar.open("Blog Created Successfully!", undefined, {
        duration: 3000
      })
    })
  }

  async onImagePicked(ev: Event) {
    const element = ev.currentTarget as HTMLInputElement;
    if (element.files){
      const file = element.files[0];
      const toBase64 = (file:File) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
      let dataUrl = await toBase64(file);
      if(dataUrl)
        this.blogForm.patchValue({image: dataUrl});
    }
  }
}
