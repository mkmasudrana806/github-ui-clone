import "./themeMode.scss";
import { MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";

// day mode options
const modeOptionsDay = [
  {
    id: 1,
    logo: "https://github.githubassets.com/assets/light_disc-f013f2cb4228.svg",
    img: "https://github.githubassets.com/assets/light_preview-0fd4f11e117f.svg",
  },
  {
    id: 2,
    logo: "https://github.githubassets.com/assets/light_high_contrast_disc-f74abfa8e811.svg",
    img: "https://github.githubassets.com/assets/light_high_contrast_preview-610b54d7c5b1.svg",
  },
  {
    id: 3,
    logo: "https://github.githubassets.com/assets/light_colorblind_disc-307fec254fd3.svg",
    img: "https://github.githubassets.com/assets/light_colorblind_preview-7cc1768c24cd.svg",
  },
  {
    id: 4,
    logo: "https://github.githubassets.com/assets/light_tritanopia_disc-bac905a50c2c.svg",
    img: "https://github.githubassets.com/assets/light_tritanopia_preview-3d7e8ee3ff87.svg",
  },
  {
    id: 5,
    logo: "https://github.githubassets.com/assets/dark_disc-2bd434b8617d.svg",
    img: "https://github.githubassets.com/assets/dark_preview-988b89718a06.svg",
  },
  {
    id: 6,
    logo: "https://github.githubassets.com/assets/dark_high_contrast_disc-3820ceab953a.svg",
    img: "https://github.githubassets.com/assets/dark_high_contrast_preview-642fa816bf29.svg",
  },
  {
    id: 7,
    logo: "https://github.githubassets.com/assets/dark_colorblind_disc-cf4710564c71.svg",
    img: "https://github.githubassets.com/assets/dark_colorblind_preview-f1cba27d7c61.svg",
  },
  {
    id: 8,
    logo: "https://github.githubassets.com/assets/dark_tritanopia_disc-606f4df188f0.svg",
    img: "https://github.githubassets.com/assets/dark_tritanopia_preview-f9b3d5f2509f.svg",
  },
  {
    id: 9,
    logo: "https://github.githubassets.com/assets/dark_dimmed_disc-ee3bad70351b.svg",
    img: "https://github.githubassets.com/assets/dark_dimmed_preview-82b04acf17cc.svg",
  },
];

// night mode options
const modeOptionsNight = [
  {
    id: 1,
    logo: "https://github.githubassets.com/assets/light_disc-f013f2cb4228.svg",
    img: "https://github.githubassets.com/assets/light_preview-0fd4f11e117f.svg",
  },
  {
    id: 2,
    logo: "https://github.githubassets.com/assets/light_high_contrast_disc-f74abfa8e811.svg",
    img: "https://github.githubassets.com/assets/light_high_contrast_preview-610b54d7c5b1.svg",
  },
  {
    id: 3,
    logo: "https://github.githubassets.com/assets/light_colorblind_disc-307fec254fd3.svg",
    img: "https://github.githubassets.com/assets/light_colorblind_preview-7cc1768c24cd.svg",
  },
  {
    id: 4,
    logo: "https://github.githubassets.com/assets/light_tritanopia_disc-bac905a50c2c.svg",
    img: "https://github.githubassets.com/assets/light_tritanopia_preview-3d7e8ee3ff87.svg",
  },
  {
    id: 5,
    logo: "https://github.githubassets.com/assets/dark_disc-2bd434b8617d.svg",
    img: "https://github.githubassets.com/assets/dark_preview-988b89718a06.svg",
  },
  {
    id: 6,
    logo: "https://github.githubassets.com/assets/dark_high_contrast_disc-3820ceab953a.svg",
    img: "https://github.githubassets.com/assets/dark_high_contrast_preview-642fa816bf29.svg",
  },
  {
    id: 7,
    logo: "https://github.githubassets.com/assets/dark_colorblind_disc-cf4710564c71.svg",
    img: "https://github.githubassets.com/assets/dark_colorblind_preview-f1cba27d7c61.svg",
  },
  {
    id: 8,
    logo: "https://github.githubassets.com/assets/dark_tritanopia_disc-606f4df188f0.svg",
    img: "https://github.githubassets.com/assets/dark_tritanopia_preview-f9b3d5f2509f.svg",
  },
  {
    id: 9,
    logo: "https://github.githubassets.com/assets/dark_dimmed_disc-ee3bad70351b.svg",
    img: "https://github.githubassets.com/assets/dark_dimmed_preview-82b04acf17cc.svg",
  },
];
const ThemeMode = () => {
  // state for day mode
  const [imageDay, setImageDay] = useState(modeOptionsDay[0].img);
  const [daySelected, setDaySelected] = useState(modeOptionsDay[0].img);

  // state for night mode
  const [imageNight, setImageNight] = useState(modeOptionsNight[0].img);
  const [nightSelected, setNightSelected] = useState(modeOptionsNight[0].img);

  return (
    <div className="theme-mode">
      {/* theme mode cart */}
      <div className="day-mode border-primary mt-1">
        <div className="flex-left day-mode-head  ">
          <MdOutlineLightMode /> <p>Day theme</p>
        </div>
        <div className="p-1">
          <p className="text-small mb-2">
            This theme will be active when your system is set to “light mode”
          </p>
          <div className="image border-primary">
            <img src={imageDay} alt="" />
            <p className="text-medium p-1">Dark default</p>
          </div>
        </div>
        {/* mode filters options  */}
        <div className="mode-filters p-1">
          {modeOptionsDay.map((option) => (
            <img
              onMouseLeave={() => setImageDay(daySelected)}
              onClick={() => setDaySelected(option.img)}
              onMouseEnter={() => setImageDay(option.img)}
              key={option.id}
              src={option.logo}
            />
          ))}
        </div>
      </div>

      {/* theme mode night cart */}
      <div className="night-mode border-primary mt-1">
        <div className="flex-between night-mode-head">
          <div className="flex-left   ">
            <MdOutlineLightMode /> <p>Night theme</p>
          </div>
          <span className="active">active</span>
        </div>
        <div className="p-1">
          <p className="text-small mb-2">
            This theme will be active when your system is set to “light mode”
          </p>
          <div className="image border-primary">
            <img src={imageNight} alt="" />
            <p className="text-medium p-1">Light default</p>
          </div>
        </div>
        {/* mode filters options  */}
        <div className="mode-filters p-1">
          {modeOptionsNight.map((option) => (
            <img
              onMouseLeave={() => setImageNight(nightSelected)}
              onClick={() => setNightSelected(option.img)}
              onMouseEnter={() => setImageNight(option.img)}
              key={option.id}
              src={option.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeMode;
