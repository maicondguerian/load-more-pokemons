import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer();
export { server, http, HttpResponse };
