import { useLayoutEffect } from "react";

export const useDisableScroll = (isLoading) => {
  useLayoutEffect(() => {
    if (isLoading) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isLoading])
}
