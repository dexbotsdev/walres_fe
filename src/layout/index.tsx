import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import   Header   from "./Header";

import "./style.scss";
import SubHeader from "./SubHeader";

interface MyContextType {
  activeBlackout: boolean;
  setActiveBlackout: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BlackoutContext = React.createContext<MyContextType>({
  activeBlackout: true,
  setActiveBlackout: () => {},
});

export const Layout: React.FC = () => {
  const [isActiveSidebar, setIsActiveSidebar] = React.useState(false);
  const [activeNameInHeaderTitle, setActiveNameInHeaderTitle] =
    React.useState("");
  const [activeBlackout, setActiveBlackout] = React.useState<boolean>(false);
  let location = useLocation();

  const hendlActiveSidebar = () => {
    setIsActiveSidebar(!isActiveSidebar);
  };

  const hendlUnactiveSidebar = () => {
    setIsActiveSidebar(false);
  };

  const hendlActiveTitle = (value: string) => {
    setActiveNameInHeaderTitle(value);
  };

  return (
    <BlackoutContext.Provider value={{ activeBlackout, setActiveBlackout }}>
      <div className="app"> 
        <div className="content">
          <Header/>
          <SubHeader />
          <Outlet />
          <div className={isActiveSidebar ? "blackout" : ""}></div>
        </div>
      </div>
      <div
        className={activeBlackout ? "blackout-all-screen" : ""}
        onClick={() => setActiveBlackout(false)}
      ></div>
    </BlackoutContext.Provider>
  );
};
