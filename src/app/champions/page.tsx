import Image from "next/image";
import { fetchChampionList } from "@/utils/serverApi";

const ChampionPage = async () => {
  const championList = await fetchChampionList();
  return (
    <div>
      ChampionPage
      {championList.map((champion) => (
        <div key={champion.id}>
          <Image
            src={champion.srcset}
            alt={champion.name}
            width={50}
            height={50}
          />
          <p>{champion.name}</p>
          <p>{champion.alias}</p>
        </div>
      ))}
    </div>
  );
};

export default ChampionPage;
