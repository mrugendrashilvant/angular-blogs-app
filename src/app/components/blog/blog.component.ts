import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { BlogData } from "../../utils/interface";
import { ApiHelperService } from "../../service/api-helper.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-blog",
    templateUrl: "./blog.component.html",
    styleUrl: "./blog.component.scss",
    standalone: true,
    imports: [CommonModule,
        MatButtonModule,
        MatCardModule,
        RouterModule,
    ]
})
export class BlogComponent implements OnInit {
    @Input({required: true, alias: "blog"}) blog!:BlogData;
    constructor(private apiHelper: ApiHelperService,
        private snackBar: MatSnackBar
        ) {

    }

    ngOnInit(): void {

    }

    deleteBlog(id:string) {
        this.apiHelper.deleteBlog(id).subscribe((data)=>{
          this.snackBar.open("Deleted Blog", "Okay", {
            duration: 1000
          });
        })
      }
}