import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalService } from '../shared/local.service';
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  title = "Contact - Hi! Feel free to reach out.";
  profile: any;
  isSubmitted = false;
  public contactForm: FormGroup;
  constructor(
    private local: LocalService,
    public sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private toast: ToastController
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      email: [
        null,
        [Validators.required, Validators.email, Validators.minLength(2)],
      ],
      message: [null, [Validators.required, Validators.minLength(50)]],
    });
  }

  async presentToast(title, message) {
    const toast = await this.toast.create({
      header: title,
      message: message,
      position: "bottom",
      buttons: [
        {
          text: "Done",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    toast.present();
  }

  getProfile(): void {
    this.local.getProfile().subscribe((data) => {
      this.profile = data;
    });
  }

  get errorControl() {
    return this.contactForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;

    if (!this.contactForm.valid) {
      return false;
    } else {
      this.presentToast(
        "Completed!",
        "Thank you for submitting the form, I'll get back to you asap!"
      );
    }
  }

  ngOnInit() {
    this.getProfile();
  }
}
