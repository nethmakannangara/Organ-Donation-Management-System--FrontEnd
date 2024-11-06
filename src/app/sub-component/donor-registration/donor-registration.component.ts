import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormArrayName, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donor-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './donor-registration.component.html',
  styleUrl: './donor-registration.component.css'
})
export class DonorRegistrationComponent {

  public donor: any = {
    donorId: "",
    frstName: "",
    lastName: "",
    dob: "",
    gender: "",
    contactNo: "",
    email: "",
    streetAddressLine: "",
    streetAddressLine2: "",
    city: "",
    province: "",
    postalCode: "",
    religion: "",
    dateOfRegistration: "",
    organTypeList: ""
  }

  constructor(private http: HttpClient) {
    this.getDonor();
  }

  getDonor() {
    console.log("hello")
    this.http.get("http://localhost:8080/donor/get").subscribe((data) => {
      console.log(data)
    })
  }
}
