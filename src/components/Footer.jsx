import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col gap-20 px-10 lg:pr-40 pt-20 pb-10 rounded-t-2xl">
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#16A34A]">MindLift</h2>
          <p className="text-sm pt-3">Intelligent decisions. For everyone.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div>
            <h2 className="font-semibold text-lg">Company</h2>
            <a
              href="/#about"
              className="text-sm pt-3 block hover:text-[#16A34A]"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-sm pt-3 block hover:text-[#16A34A]"
            >
              Contact
            </a>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Legal</h2>
            <Link
              to={"/privacy"}
              className="text-sm pt-3 block hover:text-[#16A34A]"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/terms"}
              className="text-sm pt-3 block hover:text-[#16A34A]"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full text-center">
        <p className="text-sm">© 2026 MindLift. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
