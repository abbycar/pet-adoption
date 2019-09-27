import { Component, OnInit } from '@angular/core';
import { Dog} from '../dogs';
import { DogService } from '../services/dogs-service';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  searchValue = '';
  dogs = [];
  breeds = [];
  filteredBreed;
  allDogs = [];



  constructor(private readonly dogsService: DogService, private readonly userService: UserService) {

  }

  ngOnInit() {
    this.setBreeds();
    this.dogsService.getDogs().then(dogs => {
      dogs.forEach( async (dog)=> {
        dog.favorite = await this.userService.isFavorite(this.userService.getUser(), dog.id);
      })
      this.dogs = dogs;
      this.allDogs = dogs;
      this.setBreeds();
    });
  }

  setBreeds() {
    const breedSet = new Set();
    this.dogs.forEach(dog => {
      dog.breeds.forEach(breed => {
        breedSet.add(breed.toLowerCase());
      });
    });

    this.breeds = Array.from(breedSet);
  }

  filterDogs() {
    const lowerSearch = this.searchValue.toLowerCase();
    const lowerFilteredBreed = this.filteredBreed && this.filteredBreed.toLowerCase();

    this.dogs = this.allDogs.filter(dog => {
      if (!this.searchValue && !this.filteredBreed) return true;

      const matchesName = dog.name.toLowerCase().includes(lowerSearch);
      const matchesNickname = dog.nickname.toLowerCase().includes(lowerSearch);
      const matchesDescription = dog.description.toLowerCase().includes(lowerSearch);
      const matchesBreed = !this.filteredBreed && dog.breeds.some(breed => breed.toLowerCase().includes(lowerSearch) && !!lowerSearch);
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

  toggleFavorite(dog) {
    dog.favorite = !dog.favorite;
    this.userService.setFavorite(dog.id, dog.favorite);
  }

}