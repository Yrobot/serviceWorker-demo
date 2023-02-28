import { Router, Params } from "tiny-request-router";
import images from "./resources/images";
import { html } from "./resources/html";
import { js } from "./resources/js";
import { css } from "./resources/css";

export { Router, Method, Params } from "tiny-request-router";

interface Context {
  request: Request;
  url: URL;
}

type Handler = (params: Params, context: Context) => Promise<Response>;

const router = new Router<Handler>();

router.get("/hi", async () => new Response(`Hello World!`));

router.get("/images/google", async () => new Response(await images.google()));

router.get(
  "/iframe/index.html",
  async () =>
    new Response(html, {
      headers: {
        "content-type": "text/html",
      },
    })
);
router.get(
  "/iframe/style.css",
  async () =>
    new Response(css, {
      headers: {
        "content-type": "text/css",
      },
    })
);

router.get(
  "/iframe/index.js",
  async () =>
    new Response(js, {
      headers: {
        "content-type": "application/javascript",
      },
    })
);

router.post(
  "/post",
  async () =>
    new Response(
      JSON.stringify({
        name: "service worker demo",
        author: "@yrobot",
      }),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
);

export default router;
