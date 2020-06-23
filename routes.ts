import { Router } from "https://deno.land/x/oak/mod.ts";
import UserController from "./controller/UserController.ts";

const router = new Router();

router.get("/", UserController.findall)
  .get("/:id", UserController.findbyid);

router.post("/", UserController.create);

router.delete("/:id", UserController.destroy);

router.put("/:id", UserController.update);

export default router;
