import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to work together?
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            I'm always interested in hearing about new opportunities and collaborations. Let's connect and create something great.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Contact Me
            </Button>
            <Button href="/projects" variant="neon">
              View Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
