import Container from "../ui/Container";
import SectionCard from "../ui/SectionCard";
import ShineSVG from "@/assets/icons/Shine.svg";
import skills from "@/data/skills";
import CheckMark from "@/assets/icons/Checkmark.svg";

export default function Skills() {
  return (
    <section id="skills" className="mt-[13px]">
      <Container>
        <SectionCard
          icon={ShineSVG}
          heading="Professional Skills"
          description="Key competencies essential for navigating and excelling in various professional contexts."
        >
          <ul className="flex flex-col gap-8 md:gap-10">
            {skills.map((entry) => (
              <li key={entry.id}>
                <h3 className="text-subheading mb-[16px]">{entry.category}</h3>

                <ul className="flex flex-wrap gap-x-[6px] gap-y-2">
                  {entry.items.map((item) => (
                    <li key={item} className="chips">
                      <CheckMark className="h-3 w-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </SectionCard>
      </Container>
    </section>
  );
}
