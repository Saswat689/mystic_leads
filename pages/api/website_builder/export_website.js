import jsdom from "jsdom";

const cdns = ["https://cdn.tailwindcss.com"];

export default async function handler(req, res) {
  try {
    const { html, css, js } = req.body;
    const dom = new jsdom.JSDOM(html);

    const head = dom.window.document.querySelector(`head`);
    const styles = dom.window.document.createElement("style");
    styles.innerHTML = css;
    const script = dom.window.document.createElement("script");
    script.innerHTML = js;
    [script, styles].forEach((e) => head.appendChild(e));

    for (let cdn of cdns) {
      const cdnScript = dom.window.document.createElement("script");
      cdnScript.src = cdn;
      head.appendChild(cdnScript);
    }
    const output = await dom.serialize();
    console.log(output);
    res.status(200).json(output);
  } catch (e) {
    console.log(e);
  }
}
