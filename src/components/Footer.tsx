import React, {useEffect, useState} from "react"

export const Footer = () => {
  const [time, setTime] = useState<Date | number | string>(Date.now())
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    })
  })
  return (
    <footer className="page-footer deep-purple">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Time:  {time}</h5>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Tabs</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="http://localhost:3000/tabs/1">Tab 1</a></li>
              <li><a className="grey-text text-lighten-3" href="http://localhost:3000/tabs/2">Tab 2</a></li>
              <li><a className="grey-text text-lighten-3" href="http://localhost:3000/tabs/3">Tab 3</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 opimand
          <a className="grey-text text-lighten-4 right" href="https://t.me/iphuipoim1">Telegram</a>
        </div>
      </div>
    </footer>
  )
}