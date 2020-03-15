// ---------------- Generics ---------------- //

export interface ISwapiCache {
  planets: IPlanet[][];
  people: IPeople[][];
}

// ================== Generics ================== //

// ---------------- Planet ---------------- //

interface IPlanet {
  climate: string;
  diameter: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
}

// ================== Planet ================== //

// ---------------- People ---------------- //

interface IPeople {
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
