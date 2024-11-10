import { Component, OnInit } from '@angular/core';
import { AnnouncementBoxComponent } from "../announcement-box/announcement-box.component";
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [AnnouncementBoxComponent,NgFor],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.css'
})
export class AnnouncementsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public announcementList: any = [];

  ngOnInit(): void {
    this.http.get("http://localhost:8080/announcement").subscribe(data => {
      this.announcementList=data;
      console.log(data)
    })
  }

}
