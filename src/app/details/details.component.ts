import { Component, OnInit } from '@angular/core';
import { Dog} from '../dogs'
import { DogService } from '../services/dogs-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dog;

  constructor(private route: ActivatedRoute, private readonly dogService: DogService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id || '';
    this.dogService.getDogById(id).then(dog => {this.dog = dog});
  }
}