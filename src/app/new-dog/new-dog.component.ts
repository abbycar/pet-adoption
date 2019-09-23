import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-dog',
  templateUrl: './new-dog.component.html',
  styleUrls: ['./new-dog.component.scss']
})
export class NewDogComponent implements OnInit {
    
  newDogForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
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
    this.newDogForm.reset();
  }

}
