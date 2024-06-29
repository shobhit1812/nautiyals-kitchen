const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="p-5 text-center shadow-inner font-bold font-title">
      <p>
        <strong>
          Copyright &copy; {currYear}, Made with 💗 by{" "}
          <a
            className="hover:text-orange-400 cursor-pointer"
            href="https://github.com/Shobhit1812"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Shobhit</strong>
          </a>
        </strong>
      </p>
    </footer>
  );
};

export default Footer;
