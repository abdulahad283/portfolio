import Container from "../ui/Container";
import { DotSeparatedText } from "../ui/DotSeparatedText";
import SectionCard from "../ui/SectionCard";
import ChannelSVG from "@/assets/icons/Channel.svg";
import testimonials from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-[13px]">
      <Container>
        <SectionCard
          icon={ChannelSVG}
          heading="Recommendations"
          description="Endorsements and testimonials highlighting professional aptitude and contributions from colleagues and partners."
        >
          <ul className="flex flex-col gap-8 md:gap-10">
            {testimonials.map(function (testimonial) {
              return (
                <li
                  key={testimonial.id}
                  className="flex flex-col gap-4 border-l-2 pl-4"
                  style={{ borderLeftColor: testimonial.accentColor }}
                >
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="text-subheading">{testimonial.name}</h3>
                    <DotSeparatedText
                      left={testimonial.role}
                      right={testimonial.date}
                    />
                  </div>
                  <blockquote className="text-muted">
                    {testimonial.quote}
                  </blockquote>
                </li>
              );
            })}
          </ul>
        </SectionCard>
      </Container>
    </section>
  );
}
