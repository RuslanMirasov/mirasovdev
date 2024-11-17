import { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { modifyScrollbar, freezBody, unfreezBody } from 'assets/utils/popup';

type ModalContextType = {
  isOpen: boolean;
  content: ReactNode | null;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (isOpen) {
      modifyScrollbar();
      freezBody();
    }
  }, [isOpen]);

  const openModal = (content: ReactNode) => {
    setContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      modifyScrollbar();
      unfreezBody();
      setContent(null);
    }, 300);
  };

  return <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>{children}</ModalContext.Provider>;
};

export default ModalContext;
