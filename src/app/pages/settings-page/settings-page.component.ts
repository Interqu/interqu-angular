import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings/SettingsService';
import { LoadedImage, ImageCroppedEvent } from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css'],
})
export class SettingsPageComponent implements OnInit {


  constructor(
    private settingsService: SettingsService,
    private sanitizer: DomSanitizer
    ) { }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImageInBytes: any = '';
  activeTab: string = 'firstTab';

  ngOnInit(): void {
    this.openTab('firstTab');
    this.getUserInfo();
  }
  onImageAdded(event: any): void{
    this.imageChangedEvent = event;
    const file: File = event.target.files[0];
    const extension = file.name.split('.').pop()?.toLowerCase();
    if (extension !== 'jpg' && extension !== 'jpeg') {
      alert('Please select a JPG file.');
      // Clear the input
      event.target.value = '';
      return;
    }
    document.getElementById('profilePicCrop')?.classList.remove('hidden');
  }
  imageCropped(event: ImageCroppedEvent) {
    if (event.blob) {
      const reader = new FileReader();
      reader.readAsDataURL(event.blob);

      reader.onload = () => {
          this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
          this.croppedImageInBytes = new Uint8Array(reader.result as ArrayBuffer);

      };
  } else {
      console.error('Error: Image blob is undefined');
  }
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

  onCancelPfp() {
    document.getElementById('profilePicCrop')?.classList.add('hidden');

  }
  onSubmitPfp(){
    this.settingsService.getData().subscribe(
      () => {
        // Success callback function
        console.log("Success");
        document.getElementById('profilePicCrop')?.classList.add('hidden');

      },
      (err) => {
        if (err.status == 404) {
        } else {
        }
      }
    );
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
