import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-announcement',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-announcement.component.html',
  styleUrl: './add-announcement.component.css'
})
export class AddAnnouncementComponent {

  patient = {
    patientId: '',
    firstName: '',
    lastName: '',
    address: '',
    age: '',
    bloodType: '',
    organ: ''
  };

  announcement = {
    announcementId: '',
    patientId: '',
    description: '',
    age: '',
    organ: '',
    status: 'Immediate (within the next few weeks)'
  };

  savePatient() {
    console.log('Saving patient:', this.patient);
    // Add your HTTP POST call here
  }

  createAnnouncement() {
    console.log('Creating announcement:', this.announcement);
    // Add your HTTP POST call here
  }
}
