import { Router, Params } from "tiny-request-router";
import images from "./resources/images";

export { Router, Method, Params } from "tiny-request-router";

interface Context {
  request: Request;
  url: URL;
}

type Handler = (params: Params, context: Context) => Promise<Response>;

const router = new Router<Handler>();

router.get("/hi", async () => new Response(`Hello World!`));

router.get("/images/google", async () => new Response(await images.google()));

export default router;
