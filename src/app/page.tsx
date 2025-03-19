import Link from "next/link";
import Image from "next/image";

// Home 컴포넌트
export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-start pt-12">
      <h1 className="text-4xl text-red-500 mb-6 font-bold">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="text-gray-300 text-lg mb-8 text-center">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>

      <Link href="/champions" className="w-full max-w-sm mb-8">
        <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
          <Image
            src="/images/champion.jpg"
            alt="챔피언 목록 보기"
            width={550}
            height={350}
            className="rounded-lg shadow-lg"
          />
          <p className="text-yellow-400 text-lg mt-4 text-center">
            챔피언 목록 보기
          </p>
        </div>
      </Link>

      <Link href="/rotation" className="w-full max-w-sm mb-8">
        <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
          <Image
            src="/images/rotation.jpg"
            alt="금주 로테이션 챔피언"
            width={550}
            height={350}
            className="rounded-lg shadow-lg"
          />
          <p className="text-yellow-400 text-lg mt-4 text-center">
            금주 로테이션 챔피언
          </p>
        </div>
      </Link>

      <Link href="/items" className="w-full max-w-sm mb-8">
        <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
          <Image
            src="/images/item.jpg"
            alt="아이템 목록 보기"
            width={550}
            height={350}
            className="rounded-lg shadow-lg"
          />
          <p className="text-yellow-400 text-lg mt-4 text-center">
            아이템 목록 보기
          </p>
        </div>
      </Link>

      <p className="text-gray-500 text-sm mt-6 text-center">
        챔피언 목록을 보려면 위의 메뉴를 확인하세요!
      </p>
    </div>
  );
}
