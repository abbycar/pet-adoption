import { Component, OnInit } from '@angular/core';
import { DogList, Dog} from '../dogs'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dog: Dog;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params.name || '';
    this.dog = DogList.data.find((dog) => dog.name === name) || {name: 'not found'};

  }
}