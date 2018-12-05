import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { SpinnerService } from '../services/spinner.service';
import { Travel } from '../models/travel';
import { APP_ROUTES } from '../utils/app-routes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailPage {
  @ViewChild('elementInput') elementInput;
  @ViewChild('dynamicList') dynamicList;

  endAnimationTitle: boolean;
  showInputElement: boolean;
  title: string;
  element: string;
  items: string[];
  initialItemsTravelLength: number;
  idTravel: number;

  travel: Travel;
  travels: Travel[];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private storage: StorageService,
    private spinner: SpinnerService
  ) {}

  public ionViewDidEnter(): void {
    this.idTravel = parseInt(this.activeRoute.snapshot.params.id, 10);
    this.getTravelData(this.idTravel);
    this.endAnimationTitle = false;
    this.showInputElement = false;
  }

  private getTravelData(id: number) {
    this.storage.getAllTravels().then(data => {
      this.travels = data;
      this.travel = data.find(travel => {
        return travel.id === id;
      });
      this.initialItemsTravelLength = this.travel.items.length;
      console.log(this.initialItemsTravelLength);
    });
  }

  public exitElementInput() {
    this.travel.items.push(this.elementInput.value);
    this.showInputElement = false;
  }

  public addElement() {
    this.showInputElement = true;
  }

  public showSaveButton() {
    const currentLength = this.travel.items.length;
    return currentLength !== this.initialItemsTravelLength;
  }

  public saveList() {
    this.spinner.activate();
    const index = this.travels.findIndex(travel => {
      return travel.id === this.idTravel;
    });
    this.travels[index].items = this.travel.items;
    this.storage.saveTravelInfo(this.travels).then(
      () => {
        this.router.navigate([APP_ROUTES.HOME]);
        setTimeout(() => {
          this.spinner.deactivate();
        }, 1200);
      },
      error => {
        console.log(error);
        this.spinner.deactivate();
      }
    );
  }

  public reorderItems(event: any): void {
    this.dynamicList.closeSlidingItems();
    this.travel.items = event.detail.complete(this.travel.items);
  }

  public removeItem(key: number) {
    this.dynamicList.closeSlidingItems();
    this.travel.items.splice(key, 1);
  }
}
