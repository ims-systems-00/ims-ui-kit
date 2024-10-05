import { useState } from "react";

type DrawerId = string;
export interface DrawerStore {
  isOpen: (drawerId: DrawerId) => boolean;
  toggle: (drawerId: DrawerId) => void;
  openDrawer: (drawerId: DrawerId) => void;
  closeDrawer: (drawerId: DrawerId) => void;
  closeAllDrawers: () => void;
}

export default function useDrawerStore(config: any): DrawerStore {
  const [openDrawers, setOpenDrawers] = useState<DrawerId[]>([]);

  function toggle(drawerId: DrawerId) {
    setOpenDrawers((ids) => {
      if (ids.includes(drawerId)) return ids.filter((id) => id !== drawerId);
      else return [...ids, drawerId];
    });
  }
  function isOpen(drawerId: DrawerId) {
    return openDrawers.includes(drawerId);
  }
  //close function for the top most drawer
  function closeDrawer(drawerId: DrawerId) {
    setOpenDrawers((ids) => {
      if (ids.includes(drawerId)) return ids.filter((id) => id !== drawerId);
      else return ids;
    });
  }
  //function to only open drawer
  function openDrawer(drawerId: DrawerId) {
    setOpenDrawers((ids) => {
      if (ids.includes(drawerId)) return ids;
      else return [...ids, drawerId];
    });
  }
  //function to close all drawers
  function closeAllDrawers() {
    setOpenDrawers([]);
  }
  return { isOpen, toggle, openDrawer, closeDrawer, closeAllDrawers };
}
