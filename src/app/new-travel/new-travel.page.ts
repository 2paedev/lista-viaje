import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { SpinnerService } from '../services/spinner.service';
import { Travel } from '../models/travel';
import { APP_ROUTES } from '../utils/app-routes';
import { isUndefinedOrNullOrEmpty } from '../utils/helpers';

@Component({
  selector: 'app-new-travel',
  templateUrl: './new-travel.page.html',
  styleUrls: ['./new-travel.page.scss']
})
export class NewTravelPage implements OnInit {
  @ViewChild('titleInput') titleInput;
  @ViewChild('elementInput') elementInput;
  @ViewChild('dynamicList') dynamicList;

  endAnimationTitle: boolean;
  showInputElement: boolean;
  title: string;
  element: string;
  items: string[];

  constructor(private router: Router, private storage: StorageService, private spinner: SpinnerService) { }

  public ngOnInit(): void {
    this.items = [];
    this.endAnimationTitle = false;
    this.showInputElement = false;
  }

  public exitTitleInput() {
    this.endAnimationTitle = true;
  }

  public exitElementInput() {
    const itemValue = this.elementInput.value;
    this.showInputElement = false;
    if (!isUndefinedOrNullOrEmpty(itemValue)) {
      this.items.push(itemValue);
    }
  }

  public addElement() {
    this.showInputElement = true;
  }

  public saveList() {
    this.spinner.activate();
    this.storage.getAllTravels().then(data => {
      const travel: Travel = {
        id: data.length,
        title: this.titleInput.value,
        items: this.items
      };
      const travels = data;
      travels.push(travel);
      this.storage.removeAllTravels();
      this.storage.saveTravelInfo(travels).then(
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
    });
  }

  public reorderItems(event: any): void {
    this.dynamicList.closeSlidingItems();
    this.items = event.detail.complete(this.items);
  }

  public removeItem(key: number) {
    this.dynamicList.closeSlidingItems();
    this.items.splice(key, 1);
  }

  public showSaveButton() {
    return this.items.length && this.titleInput.value;
  }
}
