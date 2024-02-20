import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto text-center sticky bottom-4 pb-12 z-40">
        <p className="">
          Created by{" "}
          <Link href="https://www.instagram.com/izzhanzy_f/" target="_blank" className="no-underline font-bold">
            @izzhanzy_f
          </Link>{" "}
          | &copy; 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
