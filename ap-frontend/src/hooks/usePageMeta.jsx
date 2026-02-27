import { useEffect } from "react";

const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);
  }, [title, description]);
};

export default usePageMeta;