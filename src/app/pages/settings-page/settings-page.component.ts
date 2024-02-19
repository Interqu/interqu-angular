import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings/SettingsService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css'],
})
export class SettingsPageComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  activeTab: string = 'firstTab';
  ngOnInit(): void {
    this.openTab('firstTab');
    this.getUserInfo();
    
  }

  openTab(tabName: string): void {
    let i: number;
    let tabcontent: HTMLCollectionOf<Element> = document.getElementsByClassName(
      'tabcontent'
    ) as HTMLCollectionOf<Element>;
    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = 'none';
    }

    let tablinks: HTMLCollectionOf<Element> = document.getElementsByClassName(
      'tablinks'
    ) as HTMLCollectionOf<Element>;
    for (i = 0; i < tablinks.length; i++) {
      (tablinks[i] as HTMLElement).classList.remove('main-tab-active');
    }

    let targetTab = document.getElementById(tabName);
    if (targetTab) {
      (targetTab as HTMLElement).style.display = 'block';
    }
    this.activeTab = tabName;
  }
  getUserInfo() : void {
    const nameField = document.getElementById('username') as HTMLInputElement;
    const emailField = document.getElementById('emailAddress') as HTMLInputElement;

    this.settingsService.getData().subscribe(
      (userInfo) => {
        // Success callback function
        console.log('User Info:', userInfo);
        nameField.placeholder = userInfo.name;
        emailField.placeholder = userInfo.email;
      },
      (err) => {
        if (err.status == 404) {
        } else {
        }
      }
    );
  }

  isActiveTab(tabName: string): boolean {
    return this.activeTab === tabName;
  }
  
}
