import { Component, OnInit } from "@angular/core";
import { ApiHelperService } from "../../service/api-helper.service";

@Component({
    selector: "app-blog",
    templateUrl: "./blog.component.html",
    styleUrl: "./blog.component.scss",
    standalone: true
})
export class BlogComponent implements OnInit {
    constructor(private apiHelper: ApiHelperService) {

    }

    ngOnInit(): void {
        this.apiHelper.getSampleData().subscribe((data:any) => {
            console.log(data);
        })
    }
}