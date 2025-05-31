import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  const navInfo = ["Home", "Pages", "About", "contact",<GiHamburgerMenu className="w-8 h-8 cursor-pointer" />];

  return (
    <div>
      <ul className="flex justify-center items-center min-w-screen text-lg gap-14 text-white ">
        {navInfo.map((data, index) => {
          return (
            <ul key={index} className="mt-10">
              {" "}
              <li className="hover:underline">{data}</li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
}
