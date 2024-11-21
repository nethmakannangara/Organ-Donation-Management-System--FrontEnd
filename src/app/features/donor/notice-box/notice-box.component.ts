import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-notice-box',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './notice-box.component.html',
  styleUrl: './notice-box.component.css'
})
export class NoticeBoxComponent {

  @Input()
  public notice: any;

  public getNoticeInfo(NoticeID: any) {
    console.log(NoticeID);
  }

}
