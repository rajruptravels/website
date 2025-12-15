import { useEffect } from "react";

type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

export const usePageMeta = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
}: MetaProps) => {
  useEffect(() => {
    // Title
    if (title) {
      document.title = title;
    }

    // Helper function
    const setMeta = (name: string, content: string, property = false) => {
      let meta = property
        ? document.querySelector(`meta[property="${name}"]`)
        : document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        property
          ? meta.setAttribute("property", name)
          : meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Standard Meta
    if (description) setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    // Open Graph
    if (ogTitle) setMeta("og:title", ogTitle, true);
    if (ogDescription) setMeta("og:description", ogDescription, true);
    if (ogImage) setMeta("og:image", ogImage, true);
    setMeta("og:type", "website", true);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage]);
};
