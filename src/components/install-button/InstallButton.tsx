import React, { useEffect, useState } from "react";
import { BeforeInstallPromptEvent } from "../../types";
import "./InstallButton.scss";

const InstallButton: React.FC = () => {
  const [supportsPWA, setSupportsPWA] =
    useState<boolean>(false);
  const [promptInstall, setPromptInstall] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] =
    useState<boolean>(false);

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    let isChrome = false;
    const userAgentData = (navigator as Navigator & { userAgentData?: { brands: { brand: string }[] } }).userAgentData;
    if (userAgentData?.brands) {
      const brands = userAgentData.brands.map((b: { brand: string }) => b.brand);
      isChrome = brands.includes("Google Chrome");
    }

    if (isChrome) {
      setSupportsPWA(true);
    }

    const isAppInstalled =
      window.matchMedia("(display-mode: standalone)")
        .matches || (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
    setIsInstalled(isAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler
      );
    };
  }, []);

  const handleClick = async () => {
    if (promptInstall) {
      await promptInstall.prompt();
      const choiceResult = await promptInstall.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log(
          "L'utilisateur a accepté l'installation de la PWA"
        );
      } else {
        console.log(
          "L'utilisateur a refusé l'installation de la PWA"
        );
      }
      setPromptInstall(null);
    }
  };

  if (isInstalled) {
    return null;
  }

  return supportsPWA ? (
    <div className="root">
      <p>
        Installez l&apos;application sur votre appareil dès
        maintenant en cliquant sur le bouton ci-dessous.
      </p>
      <div className="buttonInstall">
        <button onClick={handleClick}>
          Installer l&apos;application
        </button>
      </div>
    </div>
  ) : null;
};

export default InstallButton;
