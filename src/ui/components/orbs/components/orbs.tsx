import * as PIXI from 'pixi.js';
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur';
import {useEffect, useRef, useState} from "react";
import {Orb} from "../view_models/orb";
import {useSettingsProvider} from "@/src/ui/providers/settings.provider";

export const Orbs = () => {
    const canvasRef= useRef<HTMLCanvasElement | null>(null)
    const [PixiApp, setPixiApp] = useState<PIXI.Application | null>(null);
    const [orbs, setOrbs] = useState<Orb[]>([]);
    const color1 = useSettingsProvider((state) => state.settings?.primaryColor);
    const color2 = useSettingsProvider((state) => state.settings?.secondaryColor);
    const color3 = useSettingsProvider((state) => state.settings?.tertiaryColor);

    useEffect(() => {
        const colors = [color1?.replace("#", ""), color2?.replace("#", ""), color3?.replace("#", "")];

        const app = new PIXI.Application({
            view: canvasRef.current ?? undefined,
            resizeTo: window,
            backgroundAlpha: 0
        });
        app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

        setPixiApp(app)

        const orbsArray: Orb[] = [];

        for (let i = 0; i < 10; i++) {
            const orb = new Orb(colors[0] && `0x${colors[Math.floor(Math.random() * colors.length)]}`);
            app.stage.addChild(orb.graphics);

            orbsArray.push(orb);
        }
        setOrbs(orbsArray);
    }, [color1, color2, color3])

    useEffect(() => {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            PixiApp?.ticker.add(() => {
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
    }, [orbs, PixiApp?.ticker])



    return <canvas ref={canvasRef} />
}
