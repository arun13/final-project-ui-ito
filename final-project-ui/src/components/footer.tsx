import { h } from "preact";

type Props = {
  links?: FooterLink[]
}

type FooterLink = {
  name: string;
  linkId: string;
  linkTarget: string;
}


const _DEFAULT_LINKS: FooterLink[] = [
  {
    name: "About UIUC",
    linkId: "aboutUIUC",
    linkTarget: ""
  },
  {
    name: "Contact Us",
    linkId: "contactUs",
    linkTarget: ""
  },
  {
    name: "Legal Notices",
    linkId: "legalNotices",
    linkTarget: ""
  },
  {
    name: "Terms Of Use",
    linkId: "termsOfUse",
    linkTarget: ""
  },
  {
    name: "Your Privacy Rights",
    linkId: "yourPrivacyRights",
    linkTarget: ""
  }
]

export function Footer({ links = _DEFAULT_LINKS } : Props ) {
  return (
      <footer class="oj-web-applayout-footer" role="contentinfo">
        <div class="oj-web-applayout-footer-item oj-web-applayout-max-width">
          <ul>
            {links.map((item) => (
                <li>
                  <a id={item.linkId} href={item.linkTarget} target="_blank">
                    {item.name}
                  </a>
                </li>
            ))}
          </ul>
        </div>
        <div class="oj-web-applayout-footer-item oj-web-applayout-max-width oj-text-color-secondary oj-typography-body-sm">

        </div>
      </footer>
  );
}
