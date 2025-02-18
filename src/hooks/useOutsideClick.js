import { useEffect, useRef } from "react";

function useOutsideClick(handler, addEventListener = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      // If the click target is not inside the modal, close the modal
      if (ref.current && !ref.current.contains(e.target)) handler();
    }

    document.addEventListener("click", handleClick, addEventListener);

    return () =>
      document.removeEventListener("click", handleClick, addEventListener);
  }, [handler, addEventListener]);
  return ref;
}

export default useOutsideClick;
