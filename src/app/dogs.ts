export const DogList = {
    "data": [{
      "name": "Monty",
      "nickname": "the Sassy Pomeranian",
      "description": "Monty enjoys chicken treats and cuddling while watching Seinfeld.",
      "imgPath": "https://adopt-a-pup.glitch.me/media/1.jpg",
      "breeds": ["pomeranian", "dachshund"],
      "weight": 15,
      "age": 10,
      "favorite": false,
    }, {
      "name": "Jubilee",
      "nickname": "the Stoic Guardian",
      "description": "Jubilee enjoys thoughtful discussions by the campfire.",
      "imgPath": "https://adopt-a-pup.glitch.me/media/2.jpg",
      "breeds": ["labador", "pug"],
      "weight": 35,
      "age": 7,
      "favorite": false,
    }, {
      "name": "Beezy",
      "nickname": "the friendly beast",
      "description": "Beezy's favorite past-time is helping you choose your brand color.",
      "imgPath": "https://adopt-a-pup.glitch.me/media/3.jpg",
      "breeds": ["poodle", "greyhound"],
      "weight": 21,
      "age": 9,
      "favorite": false,
    }, {
      "name": "Mochi",
      "nickname": "the taco hunter",
      "description": "Mochi is the perfect \"rubbery ducky\" debugging pup, always listening.",
      "imgPath": "https://adopt-a-pup.glitch.me/media/4.jpg",
      "breeds": ["maltese"],
      "weight": 16,
      "age": 3,
      "favorite": false,
    }, {
      "name": "Brewery",
      "nickname": "Mr. Scratch and Sniff",
      "description": "Brewery loves fetching you your favorite homebrew.",
      "imgPath": "https://adopt-a-pup.glitch.me/media/5.jpg",
      "breeds": ["french bulldog"],
      "weight": 24,
      "age": 6,
      "favorite": false,
    }, {
      "name": "Lucy",
      "nickname": "the enegizer bunny",
      "description": "Picture yourself in a boat on a river, Lucy is a pup with kaleidoscope eyes.",
      "imgPath": "https://adopt-a-pup.glitch.me/media/6.jpg",
      "breeds": ["border collie"],
      "weight": 53,
      "age": 7,
      "favorite": false,
    }, {
      "name": "Astro",
      "nickname": "neil (armstrong)",
      "description": "Is it a bird? A plane? No, it's Astro blasting off into your heart!",
      "imgPath": "https://adopt-a-pup.glitch.me/media/7.jpg",
      "breeds": ["chihuahua", "german shepard"],
      "weight": 37,
      "age": 3,
      "favorite": false,
    }, {
      "name": "Boo",
      "nickname": "american idol wannabe",
      "description": "Boo is just a teddy bear in disguise. What he lacks in grace, he makes up in charm.",
      "imgPath": "https://adopt-a-pup.glitch.me/media/8.jpg",
      "breeds": ["german shepard"],
      "weight": 58,
      "age": 4,
      "favorite": false,
    }, {
      "name": "Pippa",
      "nickname": "the sloth",
      "description": "Pippa likes to look out the window and write pup-poetry",
      "imgPath": "https://adopt-a-pup.glitch.me/media/11.jpg",
      "breeds": ["poodle", "yorkshire terrier"],
      "weight": 19,
      "age": 5,
      "favorite": false,
    }, {
      "name": "Coco",
      "nickname": "spicy salsa",
      "description": "Coco enjoys getting pampered at the local puppy spa.",
      "imgPath": "https://adopt-a-pup.glitch.me/media/12.jpg",
      "breeds": ["golden retriever"],
      "weight": 46,
      "age": 16,
      "favorite": false,
    }, {
      "name": "Brody",
      "nickname": "the hunk",
      "description": "Brody is a good boy, waiting for your next command.",
      "imgPath": "https://adopt-a-pup.glitch.me/media/9.jpg",
      "breeds": ["lab", "chihuahua"],
      "weight": 67,
      "age": 4,
      "favorite": false,
    }, {
      "name": "Stella",
      "nickname": "gandolf",
      "description": "Stella! Calm and always up for a challenge, she's the perfect companion.",
      "imgPath": "https://adopt-a-pup.glitch.me/media/10.jpg",
      "breeds": ["greyhound", "siberian husky", "chihuahua"],
      "weight": 9,
      "age": 1,
      "favorite": false,
    }]
  }


export interface Dog {
    name: string;
    nickname?: string;
    description?: string;
    imgPath?: string;
    breeds?: string[];
    weight?: number;
    age?: number;
  }