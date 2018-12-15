import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { SpinnerService } from '../services/spinner.service';
import { Travel } from '../models/travel';
import { APP_ROUTES } from '../utils/app-routes';
import { isUndefinedOrNullOrEmpty } from '../utils/helpers';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailPage implements OnInit {
  @ViewChild('titleInput') titleInput;
  @ViewChild('elementInput') elementInput;
  @ViewChild('dynamicList') dynamicList;

  endAnimationTitle: boolean;
  showInputTitle: boolean;
  showInputElement: boolean;
  title: string;
  element: string;
  items: string[];
  initialItemsTravelLength: number;
  initialTravelTitle: string;
  idTravel: number;

  travel: Travel;
  travels: Travel[];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private storage: StorageService,
    private spinner: SpinnerService
  ) { }

  public ngOnInit(): void {
    this.idTravel = parseInt(this.activeRoute.snapshot.params.id, 10);
    this.getTravelData(this.idTravel);
    this.endAnimationTitle = false;
    this.showInputTitle = false;
    this.showInputElement = false;
  }

  private getTravelData(id: number) {
    this.storage.getAllTravels().then(data => {
      this.travels = data;
      this.travel = data.find(travel => {
        return travel.id === id;
      });
      this.initialItemsTravelLength = this.travel.items.length;
      this.initialTravelTitle = this.travel.title;
    });
  }

  public removeTravel() {
    this.spinner.activate();
    const index = this.travels.findIndex(travel => {
      return travel.id === this.idTravel;
    });
    this.travels.splice(index, 1);
    this.saveTravelsInStorage();
  }

  public editTitle() {
    this.showInputTitle = true;
  }

  public exitTitleInput() {
    const newTitle = this.titleInput.value;
    this.showInputTitle = false;
    if (!isUndefinedOrNullOrEmpty(newTitle)) {
      this.travel.title = newTitle;
    }
  }

  public exitElementInput() {
    const elementValue = this.elementInput.value;
    this.showInputElement = false;
    if (!isUndefinedOrNullOrEmpty(elementValue)) {
      this.travel.items.push(elementValue);
    }
  }

  public addElement() {
    this.showInputElement = true;
  }

  public showSaveButton() {
    const currentLength = this.travel.items.length;
    const itemsLengthChanged = currentLength !== this.initialItemsTravelLength;
    const currentTitle = this.travel.title;
    const titleChanged = currentTitle !== this.initialTravelTitle;
    return itemsLengthChanged || titleChanged;
  }

  public saveList() {
    this.spinner.activate();
    const index = this.travels.findIndex(travel => {
      return travel.id === this.idTravel;
    });
    this.travels[index].items = this.travel.items;
    this.saveTravelsInStorage();
  }

  saveTravelsInStorage() {
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
