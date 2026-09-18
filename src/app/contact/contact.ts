import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactFormModel {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly submitted = signal(false);

  protected model: ContactFormModel = {
    name: '',
    email: '',
    message: '',
  };

  // GitHub Pages hosts static files only, so there is no server here to
  // receive this form. Swap this method for a call to a form backend such
  // as Formspree, Netlify Forms, or your own API once you have one.
  protected onSubmit(): void {
    this.submitted.set(true);
    this.model = { name: '', email: '', message: '' };
  }
}
