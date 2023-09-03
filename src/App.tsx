import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [isSelected, setIsSelected] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<any>();

  const HandleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
      );

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const handleAudio = () => {
    audioRef.current?.play();
  };

  console.log(data);
  return (
    <div
      className={` w-full h-full p-6 md:p-0 md:pl-[40px] md:pr-[40px] ${
        theme === "dark" ? "bg-customBack" : "bg-white"
      }`}
    >
      <div
        className={`flex items-center md:pt-14 ${
          theme === "dark" ? "bg-customBack" : "bg-white"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="38"
          viewBox="0 0 34 38"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#838383"
            strokeLinecap="round"
            strokeWidth="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
        <h1
          className={`text-[14px] ml-auto md:text-[18px] ${
            theme === "dark" ? "text-[#FFFFFF]" : "text-[#2D2D2D]"
          }`}
        >
          Mono
        </h1>
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
        <div className=" w-[1px] h-8 bg-[#E9E9E9] ml-4 "></div>
        <div
          onClick={HandleTheme}
          className={`flex w-10 h-5 bg-[#757575] ml-4 rounded-[10px] p-[3px] ${
            isSelected ? "justify-end " : "justify-start"
          } ${theme === "dark" ? "bg-[#A445ED]" : "bg-[#757575]"} `}
        >
          <span
            onClick={() => setIsSelected(!isSelected)}
            className=" w-[14px] h-[14px] bg-white rounded-full"
          ></span>
        </div>
        <svg
          className=" ml-4"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            stroke={theme === "dark" ? "#A445ED" : "#757575"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </div>
      <div className=" mt-7">
        <input
          className={`w-[327px] h-12  rounded-2xl relative p-5 border-none md:w-[689px]  ${
            theme === "dark"
              ? "bg-[#1F1F1F] text-[#FFFFFF]"
              : "bg-[#F4F4F4] text-[#2D2D2D]"
          }`}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <svg
          className=" absolute top-[105px] left-[308px] md:top-[136px] md:left-[686px] "
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          onClick={getData}
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </svg>
      </div>
      <div className=" flex items-center justify-between mt-7">
        <div>
          {data && (
            <div>
              <h1
                className={`text-[32px] md:text-[64px] ${
                  theme === "dark" ? "text-[#FFFFFF]" : "text-[#2D2D2D]"
                }`}
              >
                {data.find((entry) => entry.word)?.word}
              </h1>
              <h1 className=" text-[#A445ED] text-[18px] md:text-[24px]">
                {data.find((entry) => entry.phonetic)?.phonetic}
              </h1>
            </div>
          )}
        </div>
        <audio
          ref={audioRef}
          hidden
          src="https://api.dictionaryapi.dev/media/pronunciations/en/car-uk."
        ></audio>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 75 75"
          onClick={handleAudio}
        >
          <g fill="#A445ED" fillRule="evenodd">
            <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
            <path d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </div>
      <div className=" flex items-center mt-[34px] flex-row-reverse "></div>

      <div className=" flex flex-col gap-3">
        {data &&
          data.map((entry, entryIndex) => (
            <div key={entryIndex}>
              {entry.meanings &&
                entry.meanings.map((meaning, meaningIndex) => (
                  <div key={meaningIndex}>
                    <h1 className=" text-[16px] text-[#757575] mt-[31px] flex items-center pb-10 md:text-[24px]">
                      {meaning.partOfSpeech}
                      <div className=" w-[266px] h-[1px] bg-[#E9E9E9] ml-[25px] md:w-[608px]"></div>
                    </h1>

                    <h1 className=" text-[#757575] text-[16px] md:text-[24px] ">
                      Meaning
                    </h1>
                    {meaning.definitions &&
                      meaning.definitions.map((definition, definitionIndex) => (
                        <div
                          key={definitionIndex}
                          className=" flex items-start mt-4 "
                        >
                          <div className="w-[5px] h-[5px] bg-[#8F19E8] rounded-full mt-[10px] "></div>
                          <h2
                            className={`text-[15px] w-fit ml-5 md:text-[18px] ${
                              theme === "dark"
                                ? "text-[#FFFFFF]"
                                : "text-[#2D2D2D]"
                            }`}
                          >
                            {definition.definition}
                          </h2>
                        </div>
                      ))}
                    <div className="flex gap-1 flex-wrap mt-6 items-center">
                      {meaning &&
                        meaning.synonyms &&
                        meaning.synonyms.length > 0 && (
                          <>
                            <h1 className="text-[#757575] text-[14px] font-normal items-center">
                              Synonyms
                            </h1>
                            <ul>
                              {meaning.synonyms.map(
                                (synonyms, synonymIndex) => (
                                  <li
                                    key={synonymIndex}
                                    className="inline text-[#A445ED] text-[16px] font-[700] md:text-[20px]  "
                                  >
                                    {synonymIndex > 0 && ", "} {synonyms}
                                  </li>
                                )
                              )}
                            </ul>
                          </>
                        )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
      <div className=" w-[327px] h-[1px] bg-[#E9E9E9]  md:w-[688px] md:mt-9"></div>
      {data && (
        <div className=" pb-[85px] md:pb-[118px]">
          <h1 className=" text-[14px] text-[#757575] mt-6">Source</h1>
          {data.sourceUrls && data.sourceUrls.length > 0 ? (
            data.sourceUrls.map((sourceUrl, index) => (
              <a
                key={index}
                className="text-[14px]"
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            ))
          ) : (
            <p>No source information available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
