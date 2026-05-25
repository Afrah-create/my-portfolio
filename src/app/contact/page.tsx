import Container from "@/components/layout/Container";
import Contact from "@/components/home/Contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Awongo Fahadi Rashid for collaborations, opportunities, or project inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="py-16">
      <Container>
        <Contact />
      </Container>
    </main>
  );
}
