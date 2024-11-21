import { Component, OnInit } from '@angular/core';
import { NoticeBoxComponent } from "../notice-box/notice-box.component";
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [NoticeBoxComponent,NgFor],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.css'
})
export class NoticesComponent implements OnInit{

  public announcementList: any = [];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/announcement/all').subscribe((data) =>{
      this.announcementList = data;
      console.log(data);
    })
  }
}
