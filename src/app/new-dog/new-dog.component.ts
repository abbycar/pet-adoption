import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DogList } from '../dogs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-dog',
  templateUrl: './new-dog.component.html',
  styleUrls: ['./new-dog.component.scss']
})
export class NewDogComponent implements OnInit {
    
  newDogForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { 
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
    DogList.data.push(this.newDogForm.value);
    console.log("dog added");
    this.router.navigate(['/', 'details', this.newDogForm.value.name]);
  }

}
