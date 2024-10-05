type DrawerId = string;
export interface DrawerStore {
    isOpen: (drawerId: DrawerId) => boolean;
    toggle: (drawerId: DrawerId) => void;
    openDrawer: (drawerId: DrawerId) => void;
    closeDrawer: (drawerId: DrawerId) => void;
    closeAllDrawers: () => void;
}
export default function useDrawerStore(config: any): DrawerStore;
export {};
