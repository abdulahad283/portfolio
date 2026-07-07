import Container from "../ui/Container";
import { DotSeparatedText } from "../ui/DotSeparatedText";
import SectionCard from "../ui/SectionCard";
import TrophySVG from "@/assets/icons/Trophy.svg";
import awards from "@/data/awards";
import CalendarSVG from "@/assets/icons/Calendar.svg";

export default function Awards() {
  return (
    <section id="awards" className="mt-[13px]">
      <Container>
        <SectionCard
          icon={TrophySVG}
          heading="Honors & Awards"
          description="Acknowledgments for exceptional achievements and contributions in professional endeavors."
        >
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
            {awards.map(function (award) {
              return (
                <li key={award.id} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="text-subheading">{award.name}</h3>
                    <DotSeparatedText
                      left={`Issued by ${award.issuer}`}
                      right={award.field}
                    />
                  </div>
                  <p className="text-muted">{award.description}</p>
                  <div className="chips mt-auto self-start">
                    <CalendarSVG className="h-3 w-3" />
                    <span>{award.date}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </SectionCard>
      </Container>
    </section>
  );
}
