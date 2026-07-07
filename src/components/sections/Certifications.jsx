import Container from "../ui/Container";
import { DotSeparatedText } from "../ui/DotSeparatedText";
import SectionCard from "../ui/SectionCard";
import CertificateSVG from "@/assets/icons/Certificate.svg";
import { certifications } from "@/data/certifications";
import ArrowUpSVG from "@/assets/icons/ArrowUp.svg";

export default function Certifications() {
  return (
    <section id="certifications" className="mt-[13px]">
      <Container>
        <SectionCard
          icon={CertificateSVG}
          heading="Licenses & Certifications"
          description="Professional accreditations and certifications demonstrating expertise and compliance with industry standards."
        >
          <ul className="grid grid-cols-1 gap-8 xs:grid-cols-2 xs:gap-x-6 xs:gap-y-10">
            {certifications.map(function (entry) {
              return (
                <li key={entry.id} className="flex flex-col gap-[16px]">
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="text-subheading">{entry.name}</h3>
                    <DotSeparatedText
                      left={entry.issuer}
                      right={`Issued ${entry.issueDate}`}
                    />
                  </div>

                  <a
                    href={entry.credentialUrl}
                    className="btn btn-light mt-auto items-center md:self-start "
                  >
                    <ArrowUpSVG className="h-4 w-4" />
                    <span>Show Credentials</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </SectionCard>
      </Container>
    </section>
  );
}
