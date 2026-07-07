import Container from "../ui/Container";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <Container>
        <p className="flex justify-center border-t border-[#e3e3e4] py-6 text-sm font-medium leading-[1.4] tracking-[-0.28px] text-[#77777d]">
          © {currentYear} All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}
