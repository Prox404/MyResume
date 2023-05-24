import './App.css'
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, useRef, useEffect } from "react";
import { privateRoutes, publicRoutes } from "./routes";
import _ from "lodash";

import DefaultLayout from "~/layouts/DefaultLayout"
import Loader from "~/components/core/Loader";
import mouseHelper from "~/core/helpers/MouseHelper";
// import Text from "~/components/Text";
import './index.scss'

function App() {
  const mouseRef = useRef(null);

  useEffect(() => {
    const movingFunc = _.throttle((event) => {
      const elementTarget = event.target;
      const object = {
        x: event.x,
        y: event.y
      };

      const mouse = mouseRef.current;
      mouseHelper.shouldTarget(mouse, elementTarget);

      document.body.style.setProperty(
        "--app-mouse-moving-x",
        `${object.x - 60 / 2}px`
      );
      document.body.style.setProperty(
        "--app-mouse-moving-y",
        `${object.y - 60 / 2}px`
      );
    }, 50);

    window.addEventListener("mousemove", movingFunc);
    return () => {
      window.removeEventListener("mousemove", movingFunc);
    };
  }, []);
  return (
    <>
      <div ref={mouseRef} className="mouse"></div>
      {/* <h1>
        wtf 
      </h1> */}
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  path={route.path}
                  key={index}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </Suspense>
    </>
  )
}

export default App
