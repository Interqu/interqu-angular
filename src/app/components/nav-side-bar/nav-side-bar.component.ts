import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { AuthService } from 'src/app/services/authentication/AuthService';

import { faComments, faHistory, faLineChart } from '@fortawesome/free-solid-svg-icons';

interface SideBarEntry {
  name: string,
  href: string,
  faIcon: IconProp
}

@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
  styleUrls: ['./nav-side-bar.component.css'],
})
export class NavSideBarComponent {
  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  data: any;

  public sideBarEntries: SideBarEntry[] = [
    // {
    //   name: "Dashboard",
    //   href: "/dashboard",
    //   faIcon: faTachometer
    // },
    {
      name: "Interviews",
      href: "/user/interviews",
      faIcon: faComments
    },
    {
      name: "Performance",
      href: "/user/performance",
      faIcon: faLineChart
    },
    {
      name: "History",
      href: "/user/history",
      faIcon: faHistory
    },
  ]

  
  onLogout(): void {
    document.getElementById("screen-fader")?.classList.remove("hidden");
    document.getElementById("check-logout")?.classList.remove("hidden");
    document.getElementById("screen-fader")?.classList.add("opacity-50");
    document.getElementById("check-logout")?.classList.add("opacity-100");
   
   
  }

  yesLogout(): void {
    this.authService.logout()
    window.location.reload();
  }
  noLogout(): void {
    document.getElementById("screen-fader")?.classList.add("hidden");
    document.getElementById("check-logout")?.classList.add("hidden");
    document.getElementById("screen-fader")?.classList.remove("opacity-50");
    document.getElementById("check-logout")?.classList.remove("opacity-100");
  }
}
