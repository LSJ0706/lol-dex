import { ChampionRotation } from "@/types/Champion";

export const getChampionRotation = async (): Promise<ChampionRotation> => {
  const response = await fetch("/api/rotation", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch rotation data: ${response.status}`);
  }
  const data: ChampionRotation = await response.json();
  return data;
};
