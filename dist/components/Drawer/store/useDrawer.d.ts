export default function useDrawer(): {
    isOpen: (drawerId: string) => boolean;
    toggle: (drawerId: string) => void;
    openDrawer: (drawerId: string) => void;
    closeDrawer: (drawerId: string) => void;
    closeAllDrawers: () => void;
};
