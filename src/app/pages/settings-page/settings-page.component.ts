import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit{
  
  
  activeTab: string = 'firstTab';
  ngOnInit(): void {
    this.openTab("firstTab");
  }

  openTab(tabName: string): void {
    let i: number;
    let tabcontent: HTMLCollectionOf<Element> = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<Element>;
    console.log(tabcontent.length)
    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = "none";
    }

    let tablinks: HTMLCollectionOf<Element> = document.getElementsByClassName("tablinks") as HTMLCollectionOf<Element>;
    for (i = 0; i < tablinks.length; i++) {
      (tablinks[i] as HTMLElement).classList.remove('active');
    }

    let targetTab = document.getElementById(tabName);
    if (targetTab) {
      (targetTab as HTMLElement).style.display = "block";
    }
    this.activeTab = tabName;
  }

  isActiveTab(tabName: string): boolean {
    return this.activeTab === tabName;
  }
}