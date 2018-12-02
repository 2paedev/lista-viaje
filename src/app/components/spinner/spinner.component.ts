import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MESSAGES } from '../../utils/constants';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input()
  show: boolean;

  config: any;
  LOADING_TEXT: string;

  constructor(
    private spinner: NgxSpinnerService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.config = {
      bdColor: '#000000',
      size: 'medium',
      color: '#00FF00',
      type: 'fire'
    };
    this.LOADING_TEXT = MESSAGES.LOADING_SPINNER;
    this.spinnerService.getData().subscribe(data => {
      if (data) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }
}
