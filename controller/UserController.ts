import { Model, DataTypes } from "https://deno.land/x/denodb/mod.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";

import db from "../database/config.ts";

class User extends Model {
  static table = "user";

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  };
}

db.link([User]);
await db.sync();

const create = (async (ctx: RouterContext) => {
  const { value:{name} } = await ctx.request.body();

  ctx.response.body = await User.create({ name });
  ctx.response.status = 201;
});

const findall = (async (ctx: RouterContext) => {
  ctx.response.body = await User.all();
  ctx.response.status = 200;
});

const findbyid = (async (ctx: RouterContext) => {
  const id = ctx.params.id || 0;

  ctx.response.body = await User.find(id);
  ctx.response.status = 200;
});

const destroy = (async (ctx: RouterContext) => {
  const id = ctx.params.id || 0;

  ctx.response.body = await User.where({ id }).delete();
  ctx.response.status = 204;
});

const update = (async (ctx: RouterContext) => {
  const id = ctx.params.id || 0;
  const { value:{name} } = await ctx.request.body();

  ctx.response.body = await User.where({ id }).update({ name });
  ctx.response.status = 200;
});

export default { create, destroy, findbyid, findall, update };
