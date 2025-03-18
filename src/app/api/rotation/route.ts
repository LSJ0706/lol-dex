import { NextResponse } from "next/server";
import { ChampionRotation } from "@/types/Champion";

export const GET = async () => {
  const apiKey = process.env.RIOT_API_KEY;
  const url = "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
  try {
    const response = await fetch(url, {
      headers: {
        "X-Riot-Token": apiKey!,
      },
    });

    const data: ChampionRotation = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch", details: (error as Error).message },
      { status: 500 }
    );
  }
};
