import { Component, OnInit } from '@angular/core';
import { DogList, Dog} from '../dogs'

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  searchValue = '';
  dogs = DogList.data;
  breeds = [];
  filteredBreed;

  constructor() {}

  ngOnInit() {
    this.setBreeds();
  }

  setBreeds() {
    const breedSet = new Set();
    this.dogs.forEach(dog => {
      dog.breeds.forEach(breed => {
        breedSet.add(breed);
      });
    });

    this.breeds = Array.from(breedSet);
  }

  filterDogs() {
    const lowerSearch = this.searchValue.toLowerCase();
    const lowerFilteredBreed = this.filteredBreed && this.filteredBreed.toLowerCase();

    this.dogs = DogList.data.filter(dog => {
      if (!this.searchValue && !this.filteredBreed) return true;

      const matchesName = dog.name.toLowerCase().includes(lowerSearch);
      const matchesNickname = dog.nickname.toLowerCase().includes(lowerSearch);
      const matchesDescription = dog.description.toLowerCase().includes(lowerSearch);
      const matchesBreed = !this.filteredBreed && dog.breeds.some(breed => breed.includes(lowerSearch) && !!lowerSearch);
      const isTextMatch = (matchesBreed && matchesName || matchesNickname || matchesDescription) && lowerSearch.length;

      const onlyBreed = dog.breeds.includes(lowerFilteredBreed);

      if (this.filteredBreed && lowerSearch.length) {
        return onlyBreed && isTextMatch;
      } else if (this.filteredBreed) {
        return onlyBreed;
      } else if (lowerSearch.length) {
        return isTextMatch;
      }
    });
  }

  onKey(event: KeyboardEvent) {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.filterDogs();
  }

  onBreedChange(breed) {
    this.filteredBreed = breed;
    this.filterDogs();
  }

  clear() {
    this.filteredBreed = null;
    this.searchValue = '';
    this.filterDogs();
  }

  unfavorite(event, name) {
    event.stopPropagation();
    const dog = this.dogs.find(dog => dog.name === name);
    dog.favorite = false;
  }

}