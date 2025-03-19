import Link from "next/link";

// Header 컴포넌트
const Header = () => {
  return (
    <header className="bg-gray-900 p-4 text-white">
      <nav className="flex justify-around max-w-md mx-auto">
        <Link
          href="/"
          className="text-white text-lg hover:text-red-500 transition duration-300"
        >
          홈
        </Link>
        <Link
          href="/champions"
          className="text-white text-lg hover:text-red-500 transition duration-300"
        >
          챔피언 목록
        </Link>
        <Link
          href="/items"
          className="text-white text-lg hover:text-red-500 transition duration-300"
        >
          아이템 목록
        </Link>
        <Link
          href="/rotation"
          className="text-white text-lg hover:text-red-500 transition duration-300"
        >
          챔피언 로테이션
        </Link>
      </nav>
    </header>
  );
};

export default Header;
