import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly services: Service[] = [
    {
      title: 'Custom furniture',
      description:
        'Tables, chairs, beds and case pieces designed around your space and drawn up with you before a single board is cut.',
      icon: 'table',
    },
    {
      title: 'Kitchens & built-ins',
      description:
        'Cabinetry, shelving and window seats joined and fitted on site, finished to match the rest of your home.',
      icon: 'shelf',
    },
    {
      title: 'Restoration & repair',
      description:
        'Loose joints, worn finishes and broken chairs brought back to daily use, not museum shelves.',
      icon: 'repair',
    },
    {
      title: 'Design consultations',
      description:
        'An hour in the workshop to talk timber, joinery and budget before you commit to a commission.',
      icon: 'compass',
    },
  ];
}
