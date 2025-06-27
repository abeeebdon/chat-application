import { Bell, HomeIcon, Settings, User } from "lucide-react";
import { BsMessenger } from "react-icons/bs";

export const navigation = [
  {
    name: "Home",
    href: "/home",
    icon: <HomeIcon />,
  },

  {
    name: "Messages",
    href: "/messages",
    icon: <BsMessenger />,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: <Bell />,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: <User />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Settings />,
  },
];
