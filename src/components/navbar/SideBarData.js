import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdAddToPhotos } from "react-icons/md";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Add Event",
    path: "/form",
    icon: <MdAddToPhotos />,
    cName: "nav-text",
  },
  {
    title: "featured attendees",
    path: "/featured",
    icon: <MdAddToPhotos />,
    cName: "nav-text",
  },
];
