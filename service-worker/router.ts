import { Router, Params } from "tiny-request-router";

export { Router, Method, Params } from "tiny-request-router";

interface Context {
  request: Request;
  url: URL;
}

type Handler = (params: Params, context: Context) => Promise<Response>;

const router = new Router<Handler>();

router.get("/hi", async () => new Response(`Hello World!`));

export default router;
