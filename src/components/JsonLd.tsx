/** Renders a JSON-LD graph into the page. Content comes only from the
 *  central structured-data generator — never inline literals. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Serialised server-side from trusted content records only.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
