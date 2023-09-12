import { useState } from "react";
type propsType = {
  selectedFont: string;
  onChangeFont: any;
  theme: string;
};
function FontSelector({ selectedFont, onChangeFont, theme }: propsType) {
  const [showOptions, setShowOptions] = useState(false);

  const fonts = ["Sans-serif", "Serif", "Mono"];

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleFontChange = (font: any) => {
    onChangeFont(font);
    toggleOptions();
    console.log(font);
  };

  return (
    <div className="relative">
      <div
        className={`cursor-pointer flex items-center ${
          theme === "dark" ? "text-[#FFFFFF]" : "text-[#2D2D2D]"
        }`}
        onClick={toggleOptions}
      >
        {selectedFont}
        <svg
          className=" ml-4"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeWidth="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </div>

      {showOptions && (
        <div
          className={` absolute top-8 right-0 border rounded-lg shadow-md p-2 z-10 lg:w-[183px] lg:h-[152px] border-none ${
            theme === "dark"
              ? "bg-[#1F1F1F] text-[#FFFFFF]"
              : "bg-[#FFFFFF] text-[#2D2D2D]"
          } `}
        >
          {fonts.map((font) => (
            <div
              key={font}
              className={`cursor-pointer p-2 ${
                selectedFont === font ? "font-bold" : ""
              }`}
              onClick={() => handleFontChange(font)}
            >
              {font}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FontSelector;
