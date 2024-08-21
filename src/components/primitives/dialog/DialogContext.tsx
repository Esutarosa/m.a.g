import {
  createContext,
  type Dispatch,
  type RefObject,
  type SetStateAction
} from 'react';

interface DialogContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  uniqueId: string;
  triggerRef: RefObject<HTMLDivElement>;
}

const DialogContext = createContext<DialogContextType | null>(null);

export default DialogContext;