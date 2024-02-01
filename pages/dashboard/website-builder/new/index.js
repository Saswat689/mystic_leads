import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../api/auth/[...nextauth]";
import settings from "@/components/dashboard/grapejs/settings";
import { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import LayersManager from "@/components/dashboard/grapejs/LayersManager";
import StyleManager from "@/components/dashboard/grapejs/StyleManager";
import BlockManager from "@/components/dashboard/grapejs/BlockManager";
import axios from "axios";
import Link from "next/link";
import AIManager from "@/components/dashboard/grapejs/AIManager";

export default function Page() {
  const [editor, setEditor] = useState();
  const [activeTab, setActiveTab] = useState();
  const [aspect, setAspect] = useState();
  const [dimensions, setDimensions] = useState({
    width: { value: 100, unit: "%" },
    height: { value: 100, unit: "%" },
    presets: [
      {
        name: "iPhone 13 Pro Max",
        width: 1284,
        height: 2778,
      },
      {
        name: "Samsung Galaxy S21 Ultra",
        width: 1440,
        height: 3200,
      },
      {
        name: "Google Pixel 6 Pro",
        width: 1440,
        height: 3120,
      },
      {
        name: "OnePlus 9 Pro",
        width: 1440,
        height: 3216,
      },
      {
        name: "Xiaomi Mi 11 Ultra",
        width: 1440,
        height: 3200,
      },
    ],
  });

  useEffect(() => {
    const editor = grapesjs.init(settings);

    setEditor(editor);
    const categories = editor?.BlockManager?.getCategories();
    if (categories) {
      categories?.each((category) => {
        category?.set("open", false);
      });
    }
    const root = document.querySelector("#editor_root");
    if (root) {
      root.parentElement.style.padding = 0;
    }

    const blockCategories = document.querySelectorAll(".gjs-block-category");

    blockCategories?.forEach((category) => {
      category?.addEventListener("click", (e) => {
        const title_1 = e.target.innerText.split(`\n`).at(0);
        blockCategories?.forEach((cat) => {
          const title_2 = cat.innerText.split(`\n`).at(0);
          if (
            !title_1.startsWith(title_2) &&
            cat.className.includes("gjs-open")
          ) {
            const category = categories.find((e) => {
              const attrId = e.attributes.id.toLowerCase().replace(/\s/g, "");
              const titleId = title_2.toLowerCase().replace(/\s/g, "");
              return attrId === titleId;
            });
            category.set("open", false);
          }
        });
      });
    });
  }, []);

  useEffect(() => {
    const gjsFrame = document.body.querySelector(`.gjs-frame`);
    if (!gjsFrame) return;
    gjsFrame.style.width = dimensions.width.value + dimensions.width.unit;
    gjsFrame.style.height = dimensions.height.value + dimensions.height.unit;
  }, [dimensions]);

  return (
    <div
      className="row m-0 p-0 bg-[#11182a] min-h-screen w-full"
      id="editor_root"
    >
      <div className="flex h-screen max-h-screen min-h-full overflow-x-hidden overflow-y-scroll w-fit min-w-fit">
        <div
          className={`flex flex-col gap-12 px-4 h-screen ${
            activeTab ? "border-r-[#f59e0b] border-r-2 " : null
          }`}
        >
          <button
            onClick={() =>
              ((t) => setActiveTab(activeTab !== t ? t : null))("layers")
            }
            className="aspect-square mt-4 cursor-pointer flex items-center justify-center w-full text-[#f59e0b] bg-inherit border-none outline-none hover:bg-opacity-65"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-[#f59e0b]"
            >
              <path d="M22.485,10.975,12,17.267,1.515,10.975A1,1,0,1,0,.486,12.69l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z" />
              <path d="M22.485,15.543,12,21.834,1.515,15.543A1,1,0,1,0,.486,17.258l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z" />
              <path d="M12,14.773a2.976,2.976,0,0,1-1.531-.425L.485,8.357a1,1,0,0,1,0-1.714L10.469.652a2.973,2.973,0,0,1,3.062,0l9.984,5.991a1,1,0,0,1,0,1.714l-9.984,5.991A2.976,2.976,0,0,1,12,14.773ZM2.944,7.5,11.5,12.633a.974.974,0,0,0,1,0L21.056,7.5,12.5,2.367a.974.974,0,0,0-1,0h0Z" />
            </svg>
          </button>
          <button
            onClick={() =>
              ((t) => setActiveTab(activeTab !== t ? t : null))("blocks")
            }
            className="flex items-center justify-center w-full border-none outline-none cursor-pointer aspect-square bg-inherit hover:bg-opacity-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-[#f59e0b]"
            >
              <path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm0,3c.276,0,.5,.225,.5,.5v3.5h-7V3h6.5ZM9,14v-4h6v4h-6Zm-6,0v-4h3v4H3Zm15-4h3v4h-3v-4ZM3.5,3h7.5V7H3V3.5c0-.275,.224-.5,.5-.5Zm-.5,18v-4h7v4H3Zm10,0v-4h8v4H13Z" />
            </svg>
          </button>
          <button
            onClick={() =>
              ((t) => setActiveTab(activeTab !== t ? t : null))("styles")
            }
            className="aspect-square cursor-pointer flex items-center justify-center w-full bg-inherit border-none outline-none text-[#f59e0b] hover:bg-opacity-20"
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#f59e0b]"
            >
              <path d="m6.4 24a6.407 6.407 0 0 1 -6.4-6.4c0-3.059 3.952-4.327 6.286-4.593a.989.989 0 0 1 .821.286l3.6 3.6a1 1 0 0 1 .287.82c-.267 2.335-1.536 6.287-4.594 6.287zm3.76-14.772-2.28 2.009 4.883 4.883 2.009-2.28zm13.124-8.512a2.452 2.452 0 0 0 -3.337-.111l-8.283 7.295 4.436 4.436 7.3-8.286a2.45 2.45 0 0 0 -.116-3.334z" />
            </svg>
          </button>{" "}
          <button
            onClick={() =>
              ((t) => setActiveTab(activeTab !== t ? t : null))("ai")
            }
            className="aspect-square cursor-pointer flex items-center justify-center w-full bg-inherit border-none outline-none text-[#f59e0b] hover:bg-opacity-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#f59e0b]"
              width="24"
              viewBox="0 0 24 24"
            >
              <path d="m24,7v-2h-2c0-1.654-1.346-3-3-3V0h-2v2h-2V0h-2v2h-2V0h-2v2h-2V0h-2v2c-1.654,0-3,1.346-3,3H0v2h2v2H0v2h2v2H0v2h2v2H0v2h2v3h3v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h3v-3h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2Zm-4,13H4V5c0-.552.449-1,1-1h14c.551,0,1,.448,1,1v15ZM10.876,7.18c-1.313-.55-2.651.221-2.937,1.458l-1.939,8.362h2.053l.232-1h3.43l.232,1h2.053l-1.922-8.291c-.154-.662-.575-1.266-1.202-1.528Zm-2.127,6.82l1.138-4.91c.012-.053.059-.09.113-.09s.101.037.113.09l1.138,4.91h-2.503Zm6.251-7h2v10h-2V7Z" />
            </svg>
          </button>
        </div>
        <LayersManager show={activeTab === "layers" ? true : false} />
        <BlockManager show={activeTab === "blocks" ? true : false} />
        <StyleManager show={activeTab === "styles" ? true : false} />
        <AIManager show={activeTab === "ai" ? true : false} editor={editor} />
      </div>
      <div id="board" className="px-5 overflow-scroll column">
        <div className="flex items-center justify-between gap-4 px-12 py-2">
          <Link className="primary-btn" href={"/dashboard"}>
            Go back
          </Link>
          <div className="flex ">
            <input
              className="bg-[#0d121f] text-[#f59e0b] overflow-hidden outline-none font-sans border-none rounded-tl-lg rounded-bl-lg border-l-2 border-[#f59e0b] p-2 w-14  flex items-center justify-center text-center"
              type="number"
              placeholder="width"
              defaultValue={dimensions.width.value}
              onInput={(e) => {
                setDimensions({
                  ...dimensions,
                  width: {
                    unit: dimensions.width.unit,
                    value: e.target.value,
                  },
                });
              }}
            />
            <select
              value={dimensions.width.unit}
              onChange={(e) => {
                setDimensions({
                  ...dimensions,
                  width: {
                    unit: e.target.value,
                    value: dimensions.width.value,
                  },
                });
              }}
              className="bg-[#0d121f] text-[#f59e0b] overflow-hidden outline-none font-sans border-none rounded-tr-lg rounded-br-lg p-2 w-14  flex items-center justify-center text-center"
            >
              <option>%</option>
              <option>px</option>
            </select>
            <select
              defaultChecked={"Custom"}
              onChange={(e) => {
                const { value } = e.target;
                const preset = dimensions.presets[value];
                const board = document.body.querySelector("#board");
                const { height, width } = board.getBoundingClientRect();
                setDimensions({
                  ...dimensions,
                  width: {
                    unit: "px",
                    value: preset?.width / 3 || width.toFixed(0),
                  },
                });
              }}
              className="bg-[#0d121f] ml-3 text-[#f59e0b] overflow-hidden outline-none font-sans border-none rounded-xl  border-l-2 border-[#f59e0b] p-2 w-fit  flex items-center justify-center text-center"
            >
              <option>Custom</option>
              {dimensions.presets.map((preset, presetIndex) => {
                return <option value={presetIndex}>{preset.name}</option>;
              })}
            </select>
          </div>

          <button
            onClick={async () => {
              const html = editor.getHtml();
              const css = editor.getCss();
              const js = editor.getJs();
              const { data: code } = await axios.post(
                "/api/website_builder/export_website",
                {
                  html,
                  css,
                  js,
                }
              );
              const filename = "site.html";
              const blob = new Blob([code], { type: "text/plain" });
              const link = document.createElement("a");
              link.style.display = "none";
              document.body.appendChild(link);
              link.href = URL.createObjectURL(blob);
              link.download = filename;
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(link.href);
            }}
            className="primary-btn"
          >
            Export
          </button>
        </div>

        <div id="gjs2" className="pb-0 overflow-y-scroll "></div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );

    // If user is not logged before purchasing then log him in
    if (!session) {
      return { redirect: { destination: "/auth/register" } };
    }

    //check if it is a paid user
    let { data } = await axios.post(
      `${process.env.MONGODB_URI}/findOne`,
      {
        dataSource: "cluster",
        database: "test",
        collection: "users",
        filter: {
          email: session.user.email,
        },
        projection: {},
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          apiKey: process.env.DATAAPI_KEY,
        },
      }
    );

    //unpaid user don't allow access
    if (!data.document?.hasPaid) {
      return { redirect: { destination: "/payment/new" } };
    }

    return {
      props: {
        email: session.user.email || null,
        username: data.document.username,
        campaigns: data.document?.campaigns || [],
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        email: null,
        username: "",
        campaigns: [],
      },
    };
  }
}
