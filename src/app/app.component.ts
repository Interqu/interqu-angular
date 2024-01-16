import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

interface IconRegistryEntry {
  name: string,
  src: string
}

const logos: string[] = [
  "darkbluelogo",
  "dashboard-icon",
  "history-icon",
  "interview-icon",
  "performance-icon",
  "settings-icon"
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    logos.map((iconName) => (
      this.matIconRegistry.addSvgIcon(
        iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${iconName}.svg`)
      )
    ))
  }
  title = 'interqu-angular';
}
