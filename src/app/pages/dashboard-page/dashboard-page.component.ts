import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings/SettingsService';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
    imageSrc: string | ArrayBuffer | null = null;
    
    constructor(private settingsService: SettingsService) { }
    ngOnInit(): void {
      this.getUserInfo();
      
    }

  
    getUserInfo() : void {
      const firstName = document.getElementById('username') as HTMLInputElement;
      const profilePic = document.getElementById('profilePic') as HTMLInputElement;
  
      this.settingsService.getData().subscribe(
        (userInfo) => {
          const byteCharacters = atob(userInfo.profilePicture);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: 'image/jpeg' });    
          const reader = new FileReader();

          reader.onload = () => {
            this.imageSrc = reader.result;
          };
          reader.readAsDataURL(blob);
          
          firstName.textContent = userInfo.firstName;
        },
        (err) => {
          if (err.status == 404) {
          } else {
          }
        }
      );
    }
}
