import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    const root = document.getElementById("modal-root");
    if (root) {
      setModalRoot(root);
    } else {
      console.error("Modal root element not found!");
    }
  }, []);

  if (!modalRoot || !isOpen) return null;

  return createPortal(
    <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
      <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4">
        <div className="flex justify-end">
          <AiOutlineClose onClick={onClose} className="self-end text-2xl cursor-pointer" />
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
