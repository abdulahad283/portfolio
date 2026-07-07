import { Fragment } from "react";
import Container from "../ui/Container";
import SectionCard from "../ui/SectionCard";
import HatSVG from "@/assets/icons/Hat.svg";
import education from "@/data/education";
import CalendarSVG from "@/assets/icons/Calendar.svg";
import { DotSeparatedText } from "../ui/DotSeparatedText";

export default function Education() {
  return (
    <section id="education" className="mt-[13px]">
      <Container>
        <SectionCard
          icon={HatSVG}
          heading="Education"
          description="Degrees and certifications in the specialized fields of data science and business analytics."
        >
          <ul>
            {education.map(function (entry, index) {
              return (
                <Fragment key={entry.id}>
                  <li className="flex flex-col justify-between gap-[16px] md:flex-row">
                    {/* Left content  */}
                    <div className="flex flex-col gap-[6px]">
                      <h3 className="text-subheading">{entry.institution}</h3>
                      <DotSeparatedText
                        left={entry.degree}
                        right={entry.field}
                      />
                    </div>
                    {/* Right chip  */}
                    <div className="chips shrink-0">
                      <CalendarSVG className="h-3 w-3" />
                      <span>{entry.dateRange}</span>
                    </div>
                  </li>
                  {index !== education.length - 1 && (
                    <hr className="my-6 border-[#ededee]" />
                  )}
                </Fragment>
              );
            })}
          </ul>
        </SectionCard>
      </Container>
    </section>
  );
}
