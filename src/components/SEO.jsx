import { useEffect } from "react";

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let desc = document.querySelector("meta[name='description']");
      if (!desc) {
        desc = document.createElement("meta");
        desc.name = "description";
        document.head.appendChild(desc);
      }
      desc.content = description;
    }

    if (keywords) {
      let key = document.querySelector("meta[name='keywords']");
      if (!key) {
        key = document.createElement("meta");
        key.name = "keywords";
        document.head.appendChild(key);
      }
      key.content = keywords;
    }
  }, [title, description, keywords]);

  return null;
}
