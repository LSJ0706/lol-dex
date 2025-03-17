export interface RiotItem {
  name: string;
  gold: { base: number; total: number; sell: number };
  description: string;
  image: { full: string };
}

export interface RiotItemResponse {
  type: string;
  version: string;
  data: Record<string, RiotItem>;
}

export interface RiotChampion {
  name: string;
  title: string;
  blurb: string;
  image: { full: string };
}

export interface RiotChampionResponse {
  type: string;
  version: string;
  data: Record<string, RiotChampion>;
}
