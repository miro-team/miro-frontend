import { useEffect } from 'react';


export const useOnClickOutside = (ref, handler, isEnabled) => {
  useEffect(
    () => {
      if (isEnabled) {
        const listener = event => {
          if (!ref.current || ref.current.contains(event.target) || !document.body.contains(event.target))
            return;
          handler(event);
        };
        document.addEventListener('click', listener);
        return () => {
          document.removeEventListener('click', listener);
        };
      }
    },
    [ref, handler, isEnabled]
  );
}
