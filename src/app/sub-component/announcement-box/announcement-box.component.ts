import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-announcement-box',
  standalone: true,
  imports: [NgIf],
  templateUrl: './announcement-box.component.html',
  styleUrl: './announcement-box.component.css'
})
export class AnnouncementBoxComponent {

  @Input()
  public announcementInfo:any;

}
