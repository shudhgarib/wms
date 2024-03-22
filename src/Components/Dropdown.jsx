import "bootstrap/dist/css/bootstrap.min.css";

function Dropdown() {
  return (
    <>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{backgroundColor: "black"}}>
          More
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="./About">
              About
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/Work">
              How We Work?
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Dropdown;
