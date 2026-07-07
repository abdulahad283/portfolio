import workExperience from "@/data/workExperience";
import Container from "../ui/Container";
import SectionCard from "../ui/SectionCard";
import PersonSVG from "@/assets/icons/Person.svg";
import CalendarSVG from "@/assets/icons/Calendar.svg";
import LocationSVG from "@/assets/icons/Location.svg";
import { DotSeparatedText } from "../ui/DotSeparatedText";

export default function Experience() {
  return (
    <section id="experience" className="mt-[13px]">
      <Container>
        <SectionCard
          icon={PersonSVG}
          heading="Work Experience"
          description="Proven track record in data science and business consulting, delivering impactful insights and results across industries."
          contentClassName="md:pl-8"
        >
          <div className="relative">
            {/* Continuous vertical line */}
            <div className="absolute bottom-0 left-[2px] top-[6px] w-[2px] bg-[#f6f6f6]" />

            <ul className="flex flex-col">
              {workExperience.map((entry) => (
                <li key={entry.id} className="flex gap-4 md:gap-6 pb-10 last:pb-0">
                  {/* Bullet */}
                  <div className="relative z-10 mt-[6px] h-[6px] w-[6px] rounded-full bg-[#8e8e92]" />

                  {/* Content */}
                  <article className="flex flex-1 flex-col gap-4">
                    {/* Job Info */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex flex-col gap-[6px]">
                        <h3 className="text-subheading">{entry.title}</h3>

                        <DotSeparatedText
                          left={entry.company}
                          right={entry.type}
                        />
                      </div>

                      <div className="chips">
                        <CalendarSVG className="h-3 w-3" />
                        <span>{entry.dateRange}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <p className="text-muted flex items-center gap-[6px] leading-none">
                      <LocationSVG className="h-[14px] w-[14px]" />
                      <span>{entry.location}</span>
                    </p>

                    {/* Description */}
                    <p className="text-muted max-w-[400px]">
                      {entry.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </SectionCard>
      </Container>
    </section>
  );
}
