import Image from "next/image";
import { fetchChampionList } from "@/utils/serverApi";
import Link from "next/link";

const ChampionPage = async () => {
  const championList = await fetchChampionList();

  return (
    <div>
      {championList.map((champion) => (
        <Link key={champion.id} href={`champions/${champion.id}`}>
          <Image
            src={champion.srcset}
            alt={champion.name}
            width={50}
            height={50}
          />
          <p>{champion.name}</p>
          <p>{champion.alias}</p>
        </Link>
      ))}
    </div>
  );
};

export default ChampionPage;
