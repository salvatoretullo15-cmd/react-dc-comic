import AppNavbar from "./AppNavbar"
export default function AppHeader(){

  const navs = [
    {
        name:"CHARACTERS",
        link:"#",
    },
    {
        name:"COMICS",
        link:"#",
    },
    {
        name:"MOVIES",
        link:"#",
    },
    {
        name:"TV",
        link:"#",
    },
    {
        name:"GAMES",
        link:"#",
    },
    {
        name:"COLLECTIBLES",
        link:"#",
    },
    {
        name:"VIDEOS",
        link:"#",
    },
    {
        name:"FANS",
        link:"#",
    },
    {
        name:"NEWS",
        link:"#",
    },
    {
        name:"SHOP",
        link:"#",
    },
];

  return (
    <header> 
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container">
          <div className="flex-grow-1 mt-2 mb-2">
            <img src="/public/img/dc-logo.png" alt="dc logo navbar"/>
          </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse flex-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navs.map(nav=>(
                <li className="nav-item">
                  <a className="nav-link" href="{nav.link}">{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}