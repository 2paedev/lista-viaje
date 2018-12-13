import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Travel } from '../models/travel';
import { SpinnerService } from '../services/spinner.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../utils/app-routes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  travels: Travel[];
  typewriterAnimIsFinished: boolean;
  intermitenteAnimIsFinished: boolean;
  showFirstParagraph: boolean;
  showSecondParagraph: boolean;
  showThirdParagraph: boolean;

  constructor(private router: Router, private storage: StorageService, private spinner: SpinnerService) {}

  public ionViewWillDid(): void {
    this.typewriterAnimIsFinished = false;
    this.intermitenteAnimIsFinished = false;
    this.showFirstParagraph = false;
    this.showSecondParagraph = false;
    this.showThirdParagraph = false;
  }

  public ionViewWillEnter(): void {
    this.initAnimation();
    this.initTravels();
    // this.storage.removeAllTravels();
  }

  private initAnimation() {
    this.showFirstParagraph = true;
    setTimeout(() => {
      this.showSecondParagraph = true;
      setTimeout(() => {
        this.showThirdParagraph = true;
        setTimeout(() => {
          this.typewriterAnimIsFinished = true;
          this.intermitenteAnimIsFinished = true;
        }, 1500);
      }, 1500);
    }, 1500);
  }

  private initTravels() {
    this.storage.getAllTravels().then(data => {
      if (data === null) {
        this.storage.initTravels();
        this.travels = [];
      } else {
        this.travels = data;
      }
    });
  }

  public goToDetail(id: number) {
    this.spinner.activate();
    this.router.navigate([APP_ROUTES.DETAIL, id]);
    setTimeout(() => {
      this.spinner.deactivate();
    }, 1200);
  }

  public goToNewTravel() {
    this.spinner.activate();
    this.router.navigate([APP_ROUTES.NEW]);
    setTimeout(() => {
      this.spinner.deactivate();
    }, 1200);
  }
}
