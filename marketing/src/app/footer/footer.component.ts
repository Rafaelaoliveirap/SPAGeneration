import { Component, OnInit } from '@angular/core';
import {faFacebookSquare} from"@fortawesome/free-brands-svg-icons"
import {faInstagram} from"@fortawesome/free-brands-svg-icons"
import {faLinkedin} from"@fortawesome/free-brands-svg-icons"
import {faGithubSquare} from"@fortawesome/free-brands-svg-icons"
import {faArrowUp} from"@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebookSquare=faFacebookSquare
  faInstagram=faInstagram
  faLinkedin=faLinkedin
  faGithubSquare=faGithubSquare
  faArrowUp=faArrowUp

  constructor() { }

  ngOnInit(): void {
  }

}
