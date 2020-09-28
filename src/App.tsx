import React from 'react';
import {Switch, BrowserRouter, Route, Link} from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { TabsPage } from "./pages/TabsPage";
import { SimpleMap } from "./pages/MapPage";
import { Footer } from "./components/Footer";
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div
          style={{margin: '10px 0'}}
        >
            <Link
              className={'waves-effect btn deep-purple '}
              to={{
                pathname: "/tabs",
              }}
            >Tabs</Link>
            <Link
              className={'waves-effect btn deep-purple '}
              to={{
                pathname: "/map",
              }}
            >Map</Link>

        </div>
        <Switch>
          <Route component={TabsPage}  path="/tabs"/>
          <Route component={SimpleMap} path="/map"/>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
