import Item from "@/types/Item";
import { Champion, ChampionDetail } from "@/types/Champion";
import {
  RiotItem,
  RiotItemResponse,
  RiotChampion,
  RiotChampionResponse,
  RiotChampionDetail,
  RiotChampionDetailResponse,
} from "@/types/Riot";

import { ITEMREGEX } from "@/constants/regex";
import { getDataUrl, getDataImgUrl } from "@/constants/apiUrl";
import { CHAMPION, ITEM } from "@/constants/riot";

const fetchItemList = async (): Promise<Item[]> => {
  const dataUrl = await getDataUrl();
  const imgUrl = await getDataImgUrl();

  const response = await fetch(`${dataUrl}item.json`, {
    cache: "force-cache",
  });
  const data: RiotItemResponse = await response.json();

  const items = Object.entries(data.data).map(
    ([id, item]: [string, RiotItem]) => ({
      id,
      name: item.name,
      priceBuy: `${item.gold.total} Gold`,
      priceSell: `${item.gold.sell} Gold`,
      description: item.description.replace(ITEMREGEX, ""),
      srcset: `${imgUrl}${ITEM}${item.image.full}`,
    })
  );
  return items;
};

const fetchChampionList = async (): Promise<Champion[]> => {
  const dataUrl = await getDataUrl();
  const imgUrl = await getDataImgUrl();

  const response = await fetch(`${dataUrl}champion.json`, {
    next: { revalidate: 84600 },
  });
  const data: RiotChampionResponse = await response.json();

  const champions = Object.entries(data.data).map(
    ([id, champion]: [string, RiotChampion]) => ({
      id,
      key: champion.key,
      name: champion.name,
      alias: champion.title,
      description: champion.lore,
      srcset: `${imgUrl}${CHAMPION}${champion.image.full}`,
    })
  );
  return champions;
};

const fetchChampionDetail = async (id: string): Promise<ChampionDetail[]> => {
  const dataUrl = await getDataUrl();
  const imgUrl = await getDataImgUrl();
  const response = await fetch(`${dataUrl}champion/${id}.json`, {
    cache: "no-store",
  });
  const data: RiotChampionDetailResponse = await response.json();
  const details = Object.entries(data.data).map(
    ([id, champion]: [string, RiotChampionDetail]) => ({
      id,
      key: champion.key,
      name: champion.name,
      alias: champion.title,
      description: champion.lore,
      srcset: `${imgUrl}${CHAMPION}${champion.image.full}`,
      spell: champion.spells.map((spell) => ({
        id: spell.id,
        name: spell.name,
        description: spell.description.replace(ITEMREGEX, " "),
        image: `${imgUrl}spell/${spell.image.full}`,
      })),
    })
  );
  return details;
};

export { fetchItemList, fetchChampionList, fetchChampionDetail };
