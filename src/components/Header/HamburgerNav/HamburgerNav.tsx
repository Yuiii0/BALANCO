import Link from "next/link";

interface HamburgerNavProps {
  setShowHamburgerNav: (value: boolean) => void;
}

function HamburgerNav({ setShowHamburgerNav }: HamburgerNavProps) {
  const handleClickNavItem = () => {
    alert("BRAND를 눌러보세요 😮");
    setShowHamburgerNav(false);
  };

  return (
    <nav className="bg-white">
      <ul className="flex flex-col justify-center w-full items-center gap-y-3 py-3 text-[15px]">
        <li onClick={() => setShowHamburgerNav(false)}>
          <Link href="/" className=" w-full block text-center">
            NEW IN
          </Link>
        </li>
        <li onClick={() => setShowHamburgerNav(false)}>
          <Link href="/brands" className="text-slate-600 font-bold">
            BRAND
          </Link>
        </li>
        <li className="">
          <button onClick={handleClickNavItem}>의류</button>
        </li>
        <li className="">
          <button onClick={handleClickNavItem}>슈즈</button>
        </li>
        <li className="">
          <button onClick={handleClickNavItem}>가방</button>
        </li>
        <li className="">
          <button onClick={handleClickNavItem}>악세서리</button>
        </li>
      </ul>
    </nav>
  );
}

export default HamburgerNav;
