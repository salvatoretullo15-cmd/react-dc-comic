export default function AppHeader(){


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
              <li className="nav-item">
                <a className="nav-link" href="#">CHARACTERS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">COMICS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">MOVIES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">TV</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">GAMES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">COLLECTIBLES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">VIDEOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">FANS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">NEWS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SHOP</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}