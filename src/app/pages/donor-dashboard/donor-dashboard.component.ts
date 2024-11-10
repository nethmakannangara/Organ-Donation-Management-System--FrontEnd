import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-donor-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './donor-dashboard.component.html',
  styleUrl: './donor-dashboard.component.css'
})
export class DonorDashboardComponent implements OnInit{

  constructor(private http:HttpClient,private loginService:LoginService){}

  public donor:any;

  ngOnInit(): void {
    // console.log(this.loginService.getLoginInfo().email);
    this.http.get("http://localhost:8080/donors/nethmakannangara@gmail.com").subscribe(data =>{
      this.donor=data;
        console.log(this.donor.firstName)
    })
  }

}
