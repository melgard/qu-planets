import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent implements OnInit {

  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      searchBox: this.formBuilder.control('')
    });
  }

  ngOnInit(): void {
  }

  public searchPlanet() {
    this.filterChanged.emit(this.form.get('searchBox').value);
  }

}
