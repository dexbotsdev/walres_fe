import React, { ErrorInfo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import   Header   from "./Header";

import "./style.scss";
import SubHeader from "./SubHeader";
import { notification } from "antd";
import { ErrorBoundary } from "react-error-boundary";

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
  const [_, setThreadId] = useState<NodeJS.Timeout | null>(null);
  const [api, contextHolder] = notification.useNotification();

  const hendlActiveSidebar = () => {
    setIsActiveSidebar(!isActiveSidebar);
  };
  type NotificationType = 'success' | 'info' | 'warning' | 'error';

  const hendlUnactiveSidebar = () => {
    setIsActiveSidebar(false);
  };
  const notify = (type: NotificationType, title: String, message: String) => {
    api[type]({
        message: `${title}`,
        description:
            `${message}`,
    });
};
  const ErrorFallback = () => {
    // we can customize the UI as we want
    return (
      <div
       
      >
        <h2>
          Oops! An error occurred
          <br />
          <br />
           Error Occured  
        </h2>
        {/* Additional custom error handling */}
      </div>
    );
  };


  const hendlActiveTitle = (value: string) => {
    setActiveNameInHeaderTitle(value);
  };

  function logError(error: Error, info: ErrorInfo): void {
    notify('error','Process Failed',error.message); 
  }

  function handleResetError(details: { reason: "imperative-api"; args: any[]; } | { reason: "keys"; prev: any[] | undefined; next: any[] | undefined; }): void {
    notify('error','Process Failed',details.reason); 
  }

  return (
    <ErrorBoundary
      onError={logError}
      onReset={handleResetError} 
      fallbackRender={ErrorFallback}
    >
    <BlackoutContext.Provider value={{ activeBlackout, setActiveBlackout }}>
      <div className="app"> 
        <div className="content">
          <Header/> 
          {contextHolder}
          <Outlet /> 
        </div>
      </div>
      <div
        className={activeBlackout ? "blackout-all-screen" : ""}
        onClick={() => setActiveBlackout(false)}
      ></div>
    </BlackoutContext.Provider>
    </ErrorBoundary>
  );
};
