import type { JsonLd } from "@/lib/json-ld";

type JsonLdScriptProps = {
  data: JsonLd | JsonLd[];
};

/** Renders one or more JSON-LD script tags for search engines. */
export default function JsonLdScript({ data }: JsonLdScriptProps) {
  const payloads = Array.isArray(data) ? data : [data];

  return (
    <>
      {payloads.map((payload, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
