export default function AppHeader(){

const navs = [
    {
        id: 1,
        name:"CHARACTERS",
        link:"#",
    },
    {
        id: 2,
        name:"COMICS",
        link:"#",
    },
    {
        id: 3,
        name:"MOVIES",
        link:"#",
    },
    {
        id:  4,
        name:"TV",
        link:"#",
    },
    {
        id: 5,
        name:"GAMES",
        link:"#",
    },
    {
        id: 6,
        name:"COLLECTIBLES",
        link:"#",
    },
    {
        id: 7,
        name:"VIDEOS",
        link:"#",
    },
    {
        id: 8,
        name:"FANS",
        link:"#",
    },
    {
        id: 9,
        name:"NEWS",
        link:"#",
    },
    {
        id: 10,
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
              {navs.map(nav => (
                <li className="nav-item" key={nav.id}>
                    <a className="nav-link" href={nav.link}>
                        {nav.name}
                    </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}