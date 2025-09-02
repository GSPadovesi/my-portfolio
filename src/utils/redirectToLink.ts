import { useCallback } from "react";

export  const redirectToLink = (link: string) => {
  window.open(`${link}`, "_blank");
};