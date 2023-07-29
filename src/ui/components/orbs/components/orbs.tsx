import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";
import { useEffect, useRef, useState } from "react";
import { Orb } from "../view_models/orb";
import { useSettingsProvider } from "@/src/ui/providers/settings.provider";
import { Stage, Container, useApp } from "@pixi/react";
import type { PixiRef } from "@pixi/react";
import { useMemo } from "react";
import "@pixi/unsafe-eval";

type IContainer = PixiRef<typeof Container>;

export const Orbs = () => {
  return (
    <Stage
      options={{
        backgroundAlpha: 0
      }}
    >
      <PixiContainer />
    </Stage>
  );
};

const PixiContainer = () => {
  const canvasRef = useRef<IContainer | null>(null);
  const blurFilter = useMemo(() => [new KawaseBlurFilter(30, 10, true)], []);
  const app = useApp();

  const [orbs, setOrbs] = useState<Orb[]>([]);
  const color1 = useSettingsProvider((state) => state.settings?.primaryColor);
  const color2 = useSettingsProvider((state) => state.settings?.secondaryColor);
  const color3 = useSettingsProvider((state) => state.settings?.tertiaryColor);
  const handleResize = () => {
    app.renderer?.resize(window.innerWidth, document.querySelector("main")?.offsetHeight || document.documentElement.scrollHeight);
  };

  useEffect(() => {
    window.onresize = () => {
      handleResize();
    };
    return () => {
      window.onresize = null;
    };
  }, [window]);

  useEffect(() => {
    const colors = [color1?.replace("#", ""), color2?.replace("#", ""), color3?.replace("#", "")];

    const orbsArray: Orb[] = [];

    for (let i = 0; i < 10; i++) {
      const orb = new Orb(colors[0] && `0x${colors[Math.floor(Math.random() * colors.length)]}`);
      canvasRef?.current?.addChild(orb.graphics);

      orbsArray.push(orb);
    }
    setOrbs(orbsArray);
  }, [color1, color2, color3]);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      app.ticker.add(() => {
        // update and render each orb, each frame. app.ticker attempts to run at 60fps
        orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      });
    } else {
      // perform one update and render per orb, do not animate
      orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    }
  }, [orbs]);

  return <Container ref={canvasRef} filters={blurFilter} />;
};
