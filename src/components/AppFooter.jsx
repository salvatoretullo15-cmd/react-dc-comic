export default function AppFooter(){

  const socials = [
    {
        id:1,
        image:"./public/img/footer-facebook.png",
        alt:"facebook",
    },
    {
        id:2,
        image:"./public/img/footer-periscope.png",
        alt:"periscope",
    },
    {
        id:3,
        image:"./public/img/footer-pinterest.png",
        alt:"pinterest",
    },
    {
        id:4,
        image:"./public/img/footer-twitter.png",
        alt:"twitter",
    },
    {
        id:5,
        image:"./public/img/footer-youtube.png",
        alt:"youtube",
    },
];

  return (
    <> 
    <div className="jumbotron">
      <div className="container justify-content-center text-white">
        <div className="row">
          <div className="row-cols-sm-4 col-md-2 mt-4">
            <h2>
              DC COMICS
            </h2>
            <ul>
              <li>
                <a>characters</a>
              </li>
              <li>
                <a>characters</a>
              </li>
              <li>
                <a>characters</a>
              </li>
              <li>
                <a>characters</a>
              </li>
              <li>
                <a>characters</a>
              </li>
              <li>
                <a>characters</a>
              </li>
              <li>
                <a>characters</a>
              </li>
            </ul>
            <h2>
              SHOP
            </h2>
            <ul>
              <li>
                <a>shop</a>
              </li>
              <li>
                <a>shop</a>
              </li>
            </ul>
          </div>
          <div className="row-cols-sm-4 col-md-2 mt-4">
            <h2>
              DC
            </h2>
            <ul>
              <li>
                <a>dc</a>
              </li>
              <li>
                <a>dc</a>
              </li>
              <li>
                <a>dc</a>
              </li>
              <li>
                <a>dc</a>
              </li>
              <li>
                <a>dc</a>
              </li>
              <li>
                <a>dc</a>
              </li>
              <li>
                <a>dc</a>
              </li>
              <li>
                <a>dc</a>
              </li>
              <li>
                <a>dc</a>
              </li>
              <li>
                <a>dc</a>
              </li>
              <li>
                <a>dc</a>
              </li>
            </ul>
          </div>
          <div className="row-cols-sm-4 col-md-2 mt-4">
            <h2>
              SITES
            </h2>
            <ul>
              <li>
                <a>sites</a>
              </li>
              <li>
                <a>sites</a>
              </li>
              <li>
                <a>sites</a>
              </li>
              <li>
                <a>sites</a>
              </li>
              <li>
                <a>sites</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="blackbar">
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-sm-6 col-md-7 p-3">
            <button className="border-primary btn text-white fw-bold">SIGN-UP NOW!</button>
          </div>
          <div className="col-sm-6 col-md-5 p-3">
            <button className="btn text-primary fw-bold">FOLLOW US</button>
            {socials.map(social =>(
              <img src={social.image} alt= {social.alt} key={social.id} className="m-1"/>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}