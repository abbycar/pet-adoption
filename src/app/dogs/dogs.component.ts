import { Component, OnInit } from '@angular/core';
import { DogList, Dog} from '../dogs'

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs = DogList.data;

  constructor() { }

  ngOnInit() {
  }
}