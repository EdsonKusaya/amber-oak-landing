import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Services } from './services/services';
import { About } from './about/about';
import { Cta } from './cta/cta';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Services, About, Cta, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
