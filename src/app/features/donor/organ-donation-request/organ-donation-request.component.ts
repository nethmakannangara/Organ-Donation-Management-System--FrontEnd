import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-organ-donation-request',
  templateUrl: './organ-donation-request.component.html',
  styleUrls: ['./organ-donation-request.component.css']
})

export class OrganDonationRequestComponent implements OnInit {
  public noticeId: string | null = null;
  public patientInfo: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.noticeId = params['noticeId'];
      console.log('Notice ID:', this.noticeId);

      if (this.noticeId) {
        this.fetchPatientData(this.noticeId);
      }
    });
  }

  private async fetchPatientData(noticeId: string): Promise<void> {
    try {
      const data = await firstValueFrom(this.http.get(`http://localhost:8080/announcement/${noticeId}`));
      this.loadDetails(data)
    } catch (error) {
      console.error('Failed to fetch patient data:', error);
    }
  }

  loadDetails(data:any){
    this.http.get(`http://localhost:8080/patient/${data.patientId}`).subscribe(patient =>{
      this.patientInfo = patient;
      console.log(patient);
    })
  }
}
