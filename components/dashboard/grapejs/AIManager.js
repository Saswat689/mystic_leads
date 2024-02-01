import gemini from "@/components/gemini";
import { useState } from "react";

export default ({ show, editor }) => {
  const [descriptor, setDescriptor] = useState("");
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState();
  return (
    <>
      <div
        className={`column m-0 p-0 h-full overflow-hidden overflow-y-scroll bg-[#11182a] slide-left ${
          !show ? "hidden" : null
        }`}
        style={{ flexBasis: "500px" }}
      >
        <p className="section__title">AI Code Generator</p>
        <br />
        <div className="flex flex-col items-start justify-center h-[15%] w-full mb-3">
          <div className="flex items-center justify-center w-full h-full">
            <textarea
              onInput={(e) => {
                if (e.target.value.length > 200) {
                  e.target.value = e.target.value.slice(0, 200);
                }

                setDescriptor(e.target.value);
              }}
              className="w-3/4 flex items-center justify-center rounded-sm h-full outline outline-2 outline-[#f59e0b] border-none font-semibold text-[#f59e0b]"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              placeholder="A cool hero section"
            ></textarea>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center w-full">
            <button
            disabled={loading? true: false}
              onClick={async () => {
                setWarning(null);
                setLoading(true);
                try {
                  const data = await gemini(
                    `Strictly Using HTML and Tailwindcss make me a html component that fits the following description "${descriptor}", Make it modern, match the colors asked aswell, I stricly JUST want the code, nothing else, and no explnations`
                  );
                  const media = await gemini(
                    `Turn this description ${descriptor} into a 1 or 2 word describing it`
                  );
                  const formattedData = data.slice(7,-3);
                  console.log(formattedData);
                  const component = {
                    removable: true,
                    draggable: true,
                    copyable: true,
                    editable: true,
                    content: formattedData,
                    category: "AI",
                    media,
                    attributes: { title: "ai_block" },
                  };
                  editor.BlockManager.add(descriptor, component);
                  setLoading(false);
                  setWarning(<>Component has been added in the blocks section</>)
                } catch (e) {
                  setWarning(<>Something went wrong. <br/> Try Again</>);
                  console.log(e);
                  setLoading(false);
                }
              }}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              className="p-2 px-6 rounded-xl border-none outline-none text-[#f59e0b]"
            >
              {loading ? "Loading..." : "Generate"}
            </button>
          </div>

          {warning ? (
            <p className="text-center warning text-[#f59e0b] text-sm m-2 p-2">
              {warning}
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};
