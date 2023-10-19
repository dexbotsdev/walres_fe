import React from "react";

import "./style.scss";

import upbgreideCoin from "../../assets/png/upbgreide-coin.png";
import bgCard from "../../assets/png/bg-cards-user.png";
import userPhoto from "../../assets/png/user-photo.png";
import checkedUser from "../../assets/svg/header/Vector.svg";
import logo from "../../assets/png/logo-title.png";

import { Buttons } from "../Buttons";
import { UserPanel } from "../Header";

interface SidebarProps {
  isActiveSidebar: boolean;
  hendlActiveTitle: (value: string) => void;
  hendlUnactiveSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isActiveSidebar,
  hendlActiveTitle,
  hendlUnactiveSidebar,
}) => {
  return (
    <aside className={`sidebar ${isActiveSidebar ? "mobile-version" : ""}`}>
      <div className={`sidebar__wrapper `}>
        <div className="sidebar__header">
          <a href="/">
            <img src={logo} alt="Logo" height="48px"/>
          </a>
          <h2>BlueBOTS</h2>
        </div>
 

        <div className="all-amount">
          <p>Total Balance</p>
          <h3>
            $15,453.05 <span>+9.34%</span>
          </h3>
        </div>

        <Buttons
          hendlActiveTitle={hendlActiveTitle}
          hendlUnactiveSidebar={hendlUnactiveSidebar}
        />

        <div
          className="upgreide-ad shadow"
          style={{ marginTop: isActiveSidebar ? "10px" : "20px" }}
        >
          <div>
            <h5>UPGRADE TO</h5>
            <h3>Professional Tier</h3>
          </div>

          <img src={upbgreideCoin} alt="Upbgreide Coin" />
        </div>

        {isActiveSidebar && (
          <div className="user-panel-mobile">
            <UserPanel />
          </div>
        )}
      </div>
    </aside>
  );
};
