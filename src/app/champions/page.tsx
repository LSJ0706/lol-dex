import Link from "next/link";
import { fetchChampionList } from "@/utils/serverApi";
import List from "@/components/commons/List";
import ChampionCard from "@/components/champions/ChampionCard";

const ChampionPage = async () => {
  const championList = await fetchChampionList();

  return (
    <List>
      {championList.map((champion) => (
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

export default ChampionPage;
