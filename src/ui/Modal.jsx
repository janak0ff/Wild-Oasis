import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

/**
 * Modal component creates a context for managing modal windows.
 * It provides the "open", "close" and "openName" state to its children.
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - The children elements that will receive the context
 * @returns {ReactElement} - A context provider that wraps the children elements
 */
function Modal({ children }) {
  const [openName, setOpenName] = useState(""); // The name of the currently open modal window

  /**
   * Close the currently open modal window.
   */
  const close = () => setOpenName("");

  /**
   * Open a modal window with the given name.
   * @param {string} name - The name of the modal window to open
   */
  const open = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

/**
 * Open component wraps a clickable element and calls the `open` function from ModalContext
 * when the wrapped element is clicked.
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Wrapped clickable element
 * @param {string} props.opens - The name of the modal window to open when the wrapped element is clicked
 * @returns {ReactElement} - The wrapped element with an onClick handler that calls the `open` function
 */
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: (...args) => {
      // Call the original onClick handler if it exists
      children.props.onClick?.(...args);

      // Open the modal window with the given name
      open(opensWindowName);
    },
  });
}

/**
 * Window component renders a modal window with the given name when the openName context state matches the given name.
 * It also renders an overlay with a close button in the top-right corner.
 * The children element is cloned and the close function is passed as the onCloseModal prop.
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - The children element to render inside the modal window
 * @param {string} props.name - The name of the modal window to match with the openName context state
 * @returns {ReactElement | null} - The rendered modal window or null if the name does not match the openName context state
 */
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close); // Close the modal when clicking outside the modal window

  // If the name of this window does not match the open window name, return null
  if (name !== openName) return null;

  // Render the modal using React Portal
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        {/* Clone the children element and provide the close function as onCloseModal prop */}
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
