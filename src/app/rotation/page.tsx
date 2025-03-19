"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { ChampionRotation, Champion } from "@/types/Champion";

import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";

import List from "@/components/commons/List";
import ChampionCard from "@/components/champions/ChampionCard";

const RotationPage = () => {
  // 챔피언 로테이션 데이터 페칭
  const {
    data: rotation,
    isLoading: rotationLoading,
    error: rotationError,
  } = useQuery<ChampionRotation, Error>({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });

  // DDragon 챔피언 데이터 페칭
  const {
    data: champions,
    isLoading: championsLoading,
    error: championsError,
  } = useQuery<Champion[], Error>({
    queryKey: ["champions"],
    queryFn: fetchChampionList,
    enabled: !!rotation, // rotation 데이터가 있을 때만 실행
  });

  // 로테이션 챔피언 필터링
  const freeChampions = champions?.filter((champion) =>
    rotation?.freeChampionIds.includes(Number(champion.key))
  );

  // 로딩 상태
  if (rotationLoading || championsLoading) {
    return <div>Loading...</div>;
  }

  // 에러 상태
  if (rotationError || championsError) {
    return (
      <div>
        Error:{" "}
        {rotationError?.message || championsError?.message || "Unknown error"}
      </div>
    );
  }

  return (
    <List>
      {freeChampions?.map((champion) => (
        <Link key={champion.id} href={`champions/${champion.id}`}>
          <ChampionCard
            imageUrl={champion.srcset}
            name={champion.name}
            alias={champion.alias}
          />
        </Link>
      ))}
    </List>
  );
};

export default RotationPage;
