export const Footer = () => {
  return (
    <div className="containerf">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="50" height="34">
              <use xlink:href="#bootstrap" />
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            &copy; 2023 Company, AgustinaPizzi
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
