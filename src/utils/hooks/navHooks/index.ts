import { useEffect, useState } from 'react';

type TUseSideDropdown = (
  menu: string[]
) => [IMenuState, THandleMenuChange, THandleMenuChange];
type THandleMenuChange = (menuItem: keyof IMenuState) => void;
export interface IMenuState {
  [index: string]: boolean;
}

const initializeState = (acc: IMenuState, item: string) => {
  acc[item] = false;
  return acc;
};

const useSideDropdown: TUseSideDropdown = menu => {
  const [menuState, setMenuState] = useState<IMenuState>(
    menu.reduce(initializeState, {})
  );

  const handleMenuOpen: THandleMenuChange = menuItem => {
    setMenuState(state => {
      const returnState = { ...state };
      for (const menuKey in returnState) {
        returnState[menuKey] = false;
      }

      return { ...returnState, [menuItem]: true };
    });
  };

  const handleMenuClose: THandleMenuChange = menuItem => {
    setMenuState(state => ({ ...state, [menuItem]: false }));
  };
  return [menuState, handleMenuOpen, handleMenuClose];
};

export { useSideDropdown };
