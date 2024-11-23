import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-organ-donation-request',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './organ-donation-request.component.html',
  styleUrls: ['./organ-donation-request.component.css']
})

export class OrganDonationRequestComponent implements OnInit {
  public noticeId: string | null = null;
  public donorEmail: string | null = null;
  public patientInfo: any;

  public donorInfo: any = {
    donorId: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    contactNo: "",
    email: "",
    streetAddressLine1: "",
    streetAddressLine2: "",
    city: "",
    province: "",
    postalCode: "",
    bloodType: "",
    dateOfRegistration: "",
    organTypeList: []
  }


  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.noticeId = params['noticeId'];
      this.donorEmail = params['donorEmail'];
      console.log(this.donorEmail);

      if (this.noticeId) {
        this.fetchPatientData(this.noticeId);
      }
    });

    this.loadDonorDetails();
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
    })
  }

  loadDonorDetails(){
    this.http.get(`http://localhost:8080/donor/${this.donorEmail}`).subscribe(data =>{
      console.log(data);
      this.donorInfo = data;
    });
  }

  sendDonorInfoToHospital(): void {
    const donorEmail = this.donorEmail;
    const donorFirstName = this.donorInfo.firstName;
    const donorLastName = this.donorInfo.lastName;
    const donorPhone = this.donorInfo.contactNo;
    const donorBloodType = this.donorInfo.bloodType;

    const patientFirstName = this.patientInfo.firstName;
    const patientLastName = this.patientInfo.lastName;
    const patientAge = this.patientInfo.age;
    const patientOrgan = this.patientInfo.organ;
    const patientBloodType = this.patientInfo.bloodType;

    const hospitalEmail = this.patientInfo.hospitalEmail;

    const requestBody = {
      donorEmail,
      donorFirstName,
      donorLastName,
      donorPhone,
      donorBloodType,
      patientFirstName,
      patientLastName,
      patientAge,
      patientOrgan,
      patientBloodType,
      hospitalEmail
    };

    this.http.post('http://localhost:8080/donor/sendDonorInfoToHospital', requestBody)
      .subscribe(response => {
        console.log('Email sent successfully', response);
      }, error => {
        console.error('Failed to send email', error);
      });
  }
}
