import { serve } from "https://deno.land/std@v0.63.0/http/server.ts";
import { say } from '../pkg/functions_lib.js';

type Resp = {
    body: string;
}

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  let r = {} as Resp;
  r.body = say (" World, its too hot\n");
  req.respond(r);
}
