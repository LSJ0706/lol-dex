// app/rotation/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
import { ChampionRotation, Champion } from "@/types/Champion";
import Image from "next/image";
import { fetchChampionList } from "@/utils/serverApi";

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
  console.log(rotation, freeChampions);
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
    <div>
      <h1>Free Champion Rotation</h1>
      <ul>
        {freeChampions?.map((champion) => (
          <li key={champion.id}>
            <Image
              src={champion.srcset}
              alt={champion.name}
              width={50}
              height={50}
            />
            <div>
              <h3>
                {champion.name} - {champion.alias}
              </h3>
              <p>{champion.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RotationPage;
