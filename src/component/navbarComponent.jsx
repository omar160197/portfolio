import NavButton from "./navbarButtonComponent";

export default function Navbar(props) {
  const navItem = props.list.map((item, id) => {
    return (
      <li key={id} class="nav-item">
        <a href={`#`+item} class="nav-link">
          {item}
        </a>
      </li>
    );
  });

  return (
    <nav class="navbar fixed-top navbar-expand-md bg-light navbar-light text-primary">
      <div class="container">
        <a href="#" class="navbar-brand">
          {props.headTitle}
        </a>

        <NavButton
          Bclass="navbar-toggler"
          Btype="button"
          Btoggle="collapse"
          Btarget="#mainmenu"
        />     

        <div class="collapse navbar-collapse" id="mainmenu">
          <ul class="navbar-nav ms-auto">{navItem}</ul>
        </div>
      </div>
    </nav>
  );
}
