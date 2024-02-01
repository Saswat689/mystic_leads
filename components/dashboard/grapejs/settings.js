import BasicPlugin from "grapesjs-blocks-basic";
import FormPlugin from "grapesjs-plugin-forms";

import blog_1 from "./components/tailblocks/blog/blog_1";
import blog_2 from "./components/tailblocks/blog/blog_2";
import blog_3 from "./components/tailblocks/blog/blog_3";
import blog_4 from "./components/tailblocks/blog/blog_4";

const blogs = [blog_1, blog_2, blog_3, blog_4];

import contact_1 from "./components/tailblocks/contact/contact_1";

const contacts = [contact_1];

import content_1 from "./components/tailblocks/content/content_1";
import content_2 from "./components/tailblocks/content/content_2";
import content_3 from "./components/tailblocks/content/content_3";
import content_4 from "./components/tailblocks/content/content_4";
import content_5 from "./components/tailblocks/content/content_5";

const contents = [content_1, content_2, content_3, content_4, content_5];

import cta_1 from "./components/tailblocks/cta/cta_1";
import cta_2 from "./components/tailblocks/cta/cta_2";

const ctas = [cta_1, cta_2];

import feature_1 from "./components/tailblocks/feature/feature_1";
import feature_2 from "./components/tailblocks/feature/feature_2";
import feature_3 from "./components/tailblocks/feature/feature_3";
import feature_4 from "./components/tailblocks/feature/feature_4";
import feature_5 from "./components/tailblocks/feature/feature_5";
import feature_6 from "./components/tailblocks/feature/feature_6";

const features = [
  feature_1,
  feature_2,
  feature_3,
  feature_4,
  feature_5,
  feature_6,
];

import footer_1 from "./components/tailblocks/footer/footer_1";
import footer_2 from "./components/tailblocks/footer/footer_2";
import footer_3 from "./components/tailblocks/footer/footer_3";

const footers = [footer_1, footer_2, footer_3];

import gallery_1 from "./components/tailblocks/gallery/gallery_1";
import gallery_2 from "./components/tailblocks/gallery/gallery_2";

const galleries = [gallery_1, gallery_2];

import header_1 from "./components/tailblocks/header/header_1";

const headers = [header_1];

import hero_1 from "./components/tailblocks/hero/hero_1";

const heros = [hero_1];

import pricing_1 from "./components/tailblocks/pricing/pricing_1";
import pricing_2 from "./components/tailblocks/pricing/pricing_2";

const pricings = [pricing_1, pricing_2];

import stat_1 from "./components/tailblocks/statistics/stat_1";
import stat_2 from "./components/tailblocks/statistics/stat_2";
import stat_3 from "./components/tailblocks/statistics/stat_3";

const stats = [stat_1, stat_2, stat_3];

import team_1 from "./components/tailblocks/team/team_1";
import team_2 from "./components/tailblocks/team/team_2";
import team_3 from "./components/tailblocks/team/team_3";

const teams = [team_1, team_2, team_3];

import testomonial_1 from "./components/tailblocks/testomonial/testomonial_1";
import testomonial_2 from "./components/tailblocks/testomonial/testomonial_2";
import testomonial_3 from "./components/tailblocks/testomonial/testomonial_3";

const testomonials = [testomonial_1, testomonial_2, testomonial_3];

export default {
  container: "#gjs2",
  height: "100%",
  width: "100%",
  fromElement: true,
  canvas: {
    scripts: ["https://cdn.tailwindcss.com"],
  },
  plugins: [BasicPlugin, FormPlugin],
  layerManager: {
    appendTo: "#layers-container",
    blocks: [],
  },
  blockManager: {
    appendTo: "#blocks",
    blocks: [
      blogs,
      contacts,
      contents,
      ctas,
      features,
      footers,
      galleries,
      headers,
      heros,
      pricings,
      stats,
      testomonials,
      teams,
    ]
      .flat(2)
      .map((block) => {
        return {
          ...block,
          attributes: {
            class: "custom_block",
          },
        };
      }),
  },
  styleManager: {
    appendTo: "#style-manager-container",
    blocks: [],
    sectors: [
      {
        name: "General",
        open: false,
        buildProps: [
          "float",
          "display",
          "position",
          "top",
          "right",
          "left",
          "bottom",
        ],
      },
      {
        name: "Dimension",
        open: false,
        buildProps: [
          "width",
          "height",
          "max-width",
          "min-height",
          "margin",
          "padding",
        ],
      },
      {
        name: "Typography",
        open: false,
        buildProps: [
          "font-family",
          "font-size",
          "font-weight",
          "letter-spacing",
          "color",
          "line-height",
          "text-align",
          "text-shadow",
        ],
      },
      {
        name: "Decorations",
        open: false,
        buildProps: [
          "border-radius-c",
          "background-color",
          "border-radius",
          "border",
          "box-shadow",
          "background",
        ],
      },
      {
        name: "Extra",
        open: false,
        buildProps: ["opacity", "transition", "perspective", "transform"],
        properties: [
          {
            type: "slider",
            property: "opacity",
            defaults: 1,
            step: 0.01,
            max: 1,
            min: 0,
          },
        ],
      },
    ],
  },
  selectorManager: {
    appendTo: "#selectors-container",
    blocks: [],
  },
  traitManager: {
    appendTo: "#traits-container",
    blocks: [],
  },
  panels: {
    defaults: [
      {
        id: "layers",
        el: "#layers",
        resizable: {
          tc: 0,
          cr: 1,
          bc: 0,
          keyWidth: "flex-basis",
        },
      },
      {
        id: "styles",
        el: "#style-manager",
        resizable: {
          tc: 0,
          cr: 0,
          cl: 1,
          bc: 0,
          keyWidth: "flex-basis",
        },
      },
    ],
  },
};
