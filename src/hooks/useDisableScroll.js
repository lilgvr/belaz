import { useLayoutEffect } from "react";

export const useDisableScroll = (isLoading) => {
  useLayoutEffect(() => {
    if (isLoading) document.body.style.overflow = 'hidden';
    else {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto';
    }
  }, [isLoading])
}
