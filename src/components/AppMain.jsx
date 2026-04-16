export default function AppMain(){


  return (
    <main className="bg-black text-white"> 
      <div className="container p-5">
        <p>--CONTENT GOES HERE--</p>
      </div>
      <div className="bg-primary p-5">
        <div className="justify-content-center text-center align-items-center row">
          <div className="col-md-2">
            <img src="./public/img/buy-comics-digital-comics.png" alt="digital comics"/>
            <span>
              DIGITAL COMICS
            </span>
          </div>
          <div className="col-md-2">
            <img src="./public/img/buy-comics-merchandise.png" alt="merchandise"/>
            <span>
              MERCHANDISE
            </span>
          </div>
          <div className="col-md-2">
            <img src="./public/img/buy-comics-shop-locator.png" alt="shop locator"/>
            <span>
              SHOP LOCATOR
            </span>
          </div>
          <div className="col-md-2">
            <img src="./public/img/buy-comics-subscriptions.png" alt="subscriptions"/>
            <span>
              SUBSCRIPTION
            </span>
          </div>
          <div className="col-md-2">
            <img src="./public/img/buy-dc-power-visa.svg" alt="dc power visa"/>
            <span>
              DC POWER VISA
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}