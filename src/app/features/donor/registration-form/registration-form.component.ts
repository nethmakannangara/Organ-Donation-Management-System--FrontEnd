import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {

  constructor(private http: HttpClient,private route:ActivatedRoute,private router: Router) { 
    this.route.queryParams.subscribe((params) => {
      this.donor.email = params['email'];
    });
  }

  public donor: any = {
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

  bloodTypes: String[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  conditionCount:Number=0;

  ngOnInit(): void {
    this.donor.dateOfRegistration = this.formatDate(new Date());

    this.http.get<string>("http://localhost:8080/donor/generate-id", { responseType: 'text' as 'json' }).subscribe(data => {
      this.donor.donorId = data;  
    }, error => {
      console.error('Error fetching donor ID:', error);
    });
  }

  public checkBirthday(dob: Date) {
    const parsedDate = new Date(dob);
    const currentDate = new Date();
    if (!(parsedDate instanceof Date && (!isNaN(parsedDate.getTime())) && (parsedDate <= currentDate))) {
      const inputDobElement = document.getElementById("dobInput") as HTMLInputElement | null;
      if (inputDobElement) {
        inputDobElement.value = "";
      }
      alert("Invalied BirthDay!!!");
    } else {
      this.donor.dob = this.formatDate(dob);
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day} `
  }

  toggleRadio(value: string): void {
    const index = this.donor.organTypeList.indexOf(value);
    if (index === -1) {
      this.donor.organTypeList.push(value);
    } else {
      this.donor.organTypeList.splice(index, 1);
    }
  }

  clearSelection() {
    this.donor.organTypeList = [];

    for (let index = 1; index <= 8; index++) {
      const radioInput = document.getElementById(`organ_type${index}`) as HTMLInputElement | null;
      if (radioInput) {
        radioInput.checked = false;
      }
    }
  }

  removeOtherPurpose() {
    for (let index = 1; index <= 2; index++) {
      const radioInput = document.getElementById(`purpose${index}`) as HTMLInputElement | null;
      if (radioInput) {
        radioInput.checked = false;
      }
    }
  }

  notNullValues():boolean{
    return true;
  }

  public submit() {
    this.http.post("http://localhost:8080/donor/register", this.donor).subscribe(
      data => {
        console.log(data);  
        if (true) { 
          this.router.navigate(['/donor-dashboard'], {queryParams: { email: this.donor.email } });
        } else {
          alert('Registration failed. Please try again.');
        }
      },
      error => {
        console.error('Error occurred:', error);
        alert('There was an error processing your registration. Please try again later.');
      }
    )};

}
