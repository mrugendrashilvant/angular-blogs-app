import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

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

  onSubmit(ev:SubmitEvent) {
    console.log(ev);
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

      console.log(this.blogForm.getRawValue());
    }
  }
}
