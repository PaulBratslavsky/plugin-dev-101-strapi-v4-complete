"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany("plugin::todo.todo", query);
  },

  async delete(id) {
    return await strapi.entityService.delete("plugin::todo.todo", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::todo.todo", data);
  },

  async update(id, data) {
    return await strapi.entityService.update("plugin::todo.todo", id, data);
  },

  async toggle(id) {
    const result = await strapi.entityService.findOne("plugin::todo.todo", id);
    return await strapi.entityService.update("plugin::todo.todo", id, {
      data: { isDone: !result.isDone },
    });
  },
});
