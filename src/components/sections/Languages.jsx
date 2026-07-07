import Container from "../ui/Container";
import SectionCard from "../ui/SectionCard";
import GlobeSVG from "@/assets/icons/Globe.svg";
import languages from "@/data/languages";

export default function Languages() {
  return (
    <section id="languages" className="mt-[13px]">
      <Container>
        <SectionCard
          icon={GlobeSVG}
          heading="Languages"
          description="Proficient in multiple languages, facilitating effective communication and collaboration in diverse settings."
        >
          <ul className="flex flex-col divide-y divide-[#ededee]">
            {languages.map(function (entry) {
              return (
                <li
                  key={entry.id}
                  className="flex flex-col gap-[6px] py-6 first:pt-0 last:pb-0"
                >
                  <h3 className="text-subheading">{entry.language}</h3>
                  <p className="text-muted">{entry.proficiency}</p>
                </li>
              );
            })}
          </ul>
        </SectionCard>
      </Container>
    </section>
  );
}
