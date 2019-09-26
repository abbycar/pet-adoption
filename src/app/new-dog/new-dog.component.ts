import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DogList } from '../dogs';
import { DogService } from '../services/dogs-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-dog',
  templateUrl: './new-dog.component.html',
  styleUrls: ['./new-dog.component.scss']
})
export class NewDogComponent implements OnInit {
    
  newDogForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private readonly dogService: DogService) { 
    this.newDogForm = this.formBuilder.group({
      name: '',
      nickname: '',
      description: '',
      imgPath: '',
      breeds: '',
      weight: 0,
      age: 0
    })
  }

  ngOnInit() {
  }

  submitDog() {
    this.newDogForm.value.breeds = this.newDogForm.value.breeds.split(',');
    this.dogService.db.collection("dogs").add({
      ...this.newDogForm.value
    })
    .then(docRef => {
      this.router.navigate(['/', 'details', docRef.id]);
    });

    }
}
