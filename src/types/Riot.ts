interface Response {
  type: string;
  version: string;
}

export interface RiotItem {
  name: string;
  gold: { base: number; total: number; sell: number };
  description: string;
  image: { full: string };
}

export interface RiotItemResponse extends Response {
  data: Record<string, RiotItem>;
}

export interface RiotChampion {
  key: string;
  name: string;
  title: string;
  lore: string;
  image: { full: string };
}

export interface RiotChampionResponse extends Response {
  data: Record<string, RiotChampion>;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  image: { full: string };
}

export interface RiotChampionDetail extends RiotChampion {
  spells: Spell[];
}

export interface RiotChampionDetailResponse extends Response {
  data: Record<string, RiotChampionDetail>;
}
