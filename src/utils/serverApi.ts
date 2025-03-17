import Item from "@/types/Item";
import Champion from "@/types/Champion";
import {
  RiotChampion,
  RiotChampionResponse,
  RiotItem,
  RiotItemResponse,
} from "@/types/Riot";

import { ITEMREGEX } from "@/constants/regex";
import { getDataUrl, getDataImgUrl } from "@/constants/apiUrl";
import { CHAMPION, ITEM } from "@/constants/riot";

const fetchItemList = async (): Promise<Item[]> => {
  const dataUrl = await getDataUrl();
  const imgUrl = await getDataImgUrl();

  const response = await fetch(dataUrl + "item.json", { cache: "force-cache" });
  const data: RiotItemResponse = await response.json();

  const items = Object.entries(data.data).map(
    ([id, item]: [string, RiotItem]) => ({
      id,
      name: item.name,
      priceBuy: `${item.gold.total} Gold`,
      priceSell: `${item.gold.sell} Gold`,
      description: item.description.replace(ITEMREGEX, ""),
      srcset: imgUrl + ITEM + item.image.full,
    })
  );
  return items;
};

const fetchChampionList = async (): Promise<Champion[]> => {
  const dataUrl = await getDataUrl();
  const imgUrl = await getDataImgUrl();

  const response = await fetch(dataUrl + "champion.json", {
    next: { revalidate: 84600 },
  });
  const data: RiotChampionResponse = await response.json();

  const champions = Object.entries(data.data).map(
    ([id, champion]: [string, RiotChampion]) => ({
      id,
      name: champion.name,
      alias: champion.title,
      description: champion.blurb,
      srcset: imgUrl + CHAMPION + champion.image.full,
    })
  );
  return champions;
};
export { fetchItemList, fetchChampionList };
