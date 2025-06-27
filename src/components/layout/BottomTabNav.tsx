import Link from "next/link";
import { navigation } from "../constants/data";

const BottomTabNav = () => {
  return (
    <section className="bg-green-500 flex flex-row gap-4 justify-evenly items-center">
      {navigation.map((nav) => {
        return (
          <Link
            key={nav.name}
            className="p-4 flex justify-center"
            href={nav.href}
          >
            {nav.icon}
          </Link>
        );
      })}
    </section>
  );
};

export default BottomTabNav;
