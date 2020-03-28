// ---------------- Generics ---------------- //

export type TResource =
  | IPlanet
  | IStarship
  | IFilm
  | IPlanet
  | ISpecies
  | IVehicle;

export interface ISwapiCache {
  planets: ISwapiData<IPlanet[][]>;
  people: ISwapiData<IPeople[][]>;
  films: ISwapiData<IFilm[][]>;
  species: ISwapiData<ISpecies[][]>;
  vehicles: ISwapiData<IVehicle[][]>;
  starships: ISwapiData<IStarship[][]>;
  // [key: keyof ISwapiCache]: ISwapiCache[keyof ISwapiCache];
}

export interface ISwapiData<T> {
  pageRange: number[];
  currentPage: number;
  data: T;
}

// ================== Generics ================== //

// ---------------- Planet ---------------- //

interface IPlanet {
  id: number;
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  residents: string[];
  films: string[];
}

// ================== Planet ================== //

// ---------------- People ---------------- //

interface IPeople {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
}

// ================== People ================== //

// ---------------- Films ---------------- //

export interface IFilm {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  species: string[];
  vehicles: string[];
}

// ================== Films ================== //

// ---------------- Species ---------------- //

export interface ISpecies {
  id: number;
  name: string;
  classification: number;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
}

// ================== Species ================== //

// ---------------- Vehicles ---------------- //

export interface IVehicle {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
}

// ================== Vehicles ================== //

// ---------------- Vehicles ---------------- //

export interface IStarship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
}

// ================== Vehicles ================== //
