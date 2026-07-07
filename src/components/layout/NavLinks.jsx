const links = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact Me", href: "#contact" },
];

export default function NavLinks({ className, onLinkClick, exclude }) {
  let visibleLinks = links;

  if (exclude) {
    visibleLinks = links.filter(function (link) {
      return link.label !== "Contact Me";
    });
  }

  function handleLinkClick() {
    return onLinkClick && onLinkClick();
  }

  return (
    <nav aria-label="Main navigation">
      <ul className={className}>
        {visibleLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={handleLinkClick}
              className="block rounded-xl px-3 py-[10px] text-sm font-medium leading-[1.4] tracking-[-0.28px] text-[#77777d] transition-colors duration-200 ease-in-out hover:bg-[#f6f6f6] hover:outline-none"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
