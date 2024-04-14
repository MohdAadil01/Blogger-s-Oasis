import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-4xl font-semibold dark:text-white font-['Montserrat'] tracking-wider"
            >
              Blogger's Oasis
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://mohd-aadil-git-main-mohd-aadils-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/mohdaadil01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://twitter.com/_MOHD_AADIL"
                  target="_blank"
                >
                  Twitter
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/mohd-aadil4240/"
                  target="_blank"
                >
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Mohd Aadil"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/mohd-aadil4240/"
              icon={BsLinkedin}
              target="_blank"
            />
            <Footer.Icon
              href="https://twitter.com/_MOHD_AADIL"
              icon={BsTwitter}
              target="_blank"
            />
            <Footer.Icon
              href="https://github.com/mohdaadil01"
              icon={BsGithub}
              target="_blank"
            />
            <Footer.Icon
              href="https://mohd-aadil-git-main-mohd-aadils-projects.vercel.app/"
              icon={BsDribbble}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
