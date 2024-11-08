import Link from "next/link";
function Header() {
  return (
    <header className=" border-b border-zinc-800 h-16 flex items-center justify-between px-16">
      <img
        className="w-12"
        src="https://nuevo.editorialupds.com/wp-content/uploads/2024/11/logo-upds-oficial.png"
        alt=""
      />

      <nav className="hidden md:block">
        <ul className="flex  gap-4  text-white">
          <li>
            <Link href={"/uno"}>Uno</Link>
          </li>
          <li>
            <Link href={"/dos"}>dos</Link>
          </li>

          <li>
            <Link href={"/tres"}>tres</Link>
          </li>
          <li>
            <Link href={"/cuatro"}>cuatro</Link>
          </li>
          <li>
            <Link href={"/cinco"}>cinco</Link>
          </li>

          <li>
            <Link href={"/seis"}>seis</Link>
          </li>
          <li>
            <Link href={"/siete"}>siete</Link>
          </li>
          <li>
            <Link href={"/ocho"}>ocho</Link>
          </li>
          <li>
            <Link href={"/nueve"}>nueve</Link>
          </li>
          <li>
            <Link href={"/diez"}>diez</Link>
          </li>
          <li>
            <Link href={"/once"}>once</Link>
          </li>
          <li>
            <Link href={"/doce"}>doce</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
