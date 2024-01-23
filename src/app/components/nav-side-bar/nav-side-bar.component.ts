import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faComments, faHistory, faLineChart, faTachometer, faUserSecret } from '@fortawesome/free-solid-svg-icons';

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
  public sideBarEntries: SideBarEntry[] = [
    // {
    //   name: "Dashboard",
    //   href: "/dashboard",
    //   faIcon: faTachometer
    // },
    {
      name: "Interviews",
      href: "/interviews",
      faIcon: faComments
    },
    {
      name: "Performance",
      href: "/performance",
      faIcon: faLineChart
    },
    {
      name: "History",
      href: "/history",
      faIcon: faHistory
    },
  ]
}
