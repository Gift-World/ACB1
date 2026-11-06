import { useEffect } from "react";

const siteUrl = "https://acbafrica.com";
const defaultImage = `${siteUrl}/acb2.png`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Africa's Campus Battle",
      alternateName: "ACB",
      url: siteUrl,
      logo: defaultImage,
      description:
        "Africa's Campus Battle is a continental platform for young African talent in dance, music, spoken word and performing arts.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Africa's Campus Battle",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

function setMeta(selector, attributeName, attributeValue, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.content = value;
}

function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    const url = `${siteUrl}${path}`;
    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let schema = document.head.querySelector("#acb-organization-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "acb-organization-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(organizationSchema);
  }, [description, path, title]);

  return null;
}

export default Seo;
