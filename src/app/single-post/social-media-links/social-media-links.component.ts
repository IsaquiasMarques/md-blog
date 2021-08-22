import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.css']
})
export class SocialMediaLinksComponent implements OnInit {

  constructor() { }

  // faCoffee = faCoffee;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faLinkedIn = faLinkedinIn;
  faLink = faLink;

  ngOnInit(): void {
    this.faFacebook;
    this.faInstagram;
    this.faLinkedIn;
    this.faLink;
  }

}
