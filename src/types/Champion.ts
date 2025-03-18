export interface Champion {
  key: string;
  id: string;
  name: string;
  alias: string;
  description: string;
  srcset: string;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface ChampionDetail extends Champion {
  spell: Spell[];
}

export interface ChampionRotation {
  freeChampionIds: number[];
}
