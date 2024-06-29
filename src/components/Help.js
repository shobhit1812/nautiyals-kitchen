import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-gray-700 shadow-xl p-2 m-2 rounded-xl font-help">
      <h1 className="font-bold text-3xl">{title}</h1>
      {isVisible ? (
        <button
          className="border text-white text-xl bg-slate-800 hover:bg-slate-700 rounded-2xl p-1 m-1"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="border text-white text-xl bg-cyan-900 hover:bg-cyan-800 rounded-2xl p-1 m-1"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
      {isVisible && <div>{description}</div>}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const toggleVisibility = (key) => {
    setVisibleSection(visibleSection === key ? "" : key);
  };

  return (
    <div className="flex flex-col justify-center font-help">
      <h1 className="m-6 flex justify-center underline center text-green-600 font-medium text-5xl">
        Help
      </h1>
      <Section
        title="About"
        description={
          <ul className="m-2 p-3">
            <h3 className="text-2xl underline">About this Application</h3>
            <li className="list-decimal text-lg">
              Developed a dynamic and responsive food ordering website utilizing
              React for building interactive user interfaces.
            </li>
            <li className="list-decimal text-lg">
              Implemented routing and navigation using React Router DOM,
              enabling users to seamlessly browse different restaurants and
              their respective menus.
            </li>
            <li className="list-decimal text-lg">
              Integrated state management with React Redux to handle cart
              functionality and maintain a smooth user experience.
            </li>
            <li className="list-decimal text-lg">
              Styled the application with Tailwind CSS to create a modern and
              visually appealing design.
            </li>
            <li className="list-decimal text-lg">
              Fetched and displayed restaurant data from the SWIGGY API,
              ensuring real-time and accurate information for users.
            </li>
            <li className="list-decimal text-lg">
              Optimized the build process using Parcel, Babel and Lazy Loading,
              improving performance and compatibility across different browsers.
            </li>
            <li className="list-decimal text-lg">
              Enhanced user engagement by allowing users to select items from a
              restaurant’s menu and add them to their cart for a streamlined
              ordering process.
            </li>
          </ul>
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => toggleVisibility("about")}
      />
      <div className="min-h-full">
        <Section
          title="FAQ"
          description={
            <div className="text-2xl">
              If the website is not working, install a Chrome extension called "
              <a
                href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
                target="_blank"
                rel="noreferrer"
                className="text-orange-400"
              >
                Allow CORS
              </a>
              ." Enable the CORS plugin, then go to the{" "}
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-orange-400"
              >
                Homepage
              </a>{" "}
              (i.e., the food section) and refresh the page. This will fix the
              issue. The problem is that the website fetches an API, and our
              browser restricts that API. Therefore, we need to install the CORS
              plugin or "Allow CORS."
            </div>
          }
          isVisible={visibleSection === "team"}
          setIsVisible={() => toggleVisibility("team")}
        />
        <Section
          title="Contact"
          description={
            <div className="text-lg">
              Connect with me
              <a
                href="https://github.com/Shobhit1812"
                target="_blank"
                rel="noreferrer"
                className="text-red-500"
              >
                {" "}
                @GitHub
              </a>
              .
            </div>
          }
          isVisible={visibleSection === "contact"}
          setIsVisible={() => toggleVisibility("contact")}
        />
      </div>
    </div>
  );
};

export default Help;
