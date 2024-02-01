import fs from "fs";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);

    //user is logged in and secure
    if (!session) {
      return res.status(401).send("Access forbidden");
    }

    const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
    const options = {
      logLevel: "info",
      output: "html",
      port: chrome.port,
    };

    const runnerResult = await lighthouse(req.query.link, options);

    // `.report` is the HTML report as a string
    const reportHtml = runnerResult.report;

    // `.lhr` is the Lighthouse Result as a JS object
    console.log("Report is done for", runnerResult.lhr.finalDisplayedUrl);
    console.log(
      "Performance score was",
      runnerResult.lhr.categories.performance.score * 100
    );

    await chrome.kill();

    return res.status(201).json({
      html: reportHtml,
    });
  } catch (e) {
    console.log(e);
  }
}
