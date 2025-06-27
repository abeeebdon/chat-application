import { navigation } from "../constants/data";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section className="mt-10   ">
      {navigation.map((item) => (
        <Link
          key={item.name}
          className="p-4 flex justify-center group relative rounded-lg"
          href={item.href}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-base hidden group-hover:block absolute left-2/3 top-1/2 transform -translate-y-1/2 pl-2">
            {item.name}
          </span>
        </Link>
      ))}
    </section>
  );
};

export default Sidebar;
