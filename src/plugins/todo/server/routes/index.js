module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "GET",
    path: "/find",
    handler: "todo.find",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "POST",
    path: "/create",
    handler: "todo.create",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "todo.delete",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "PUT",
    path: "/toggle/:id",
    handler: "todo.toggle",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "PUT",
    path: "/update/:id",
    handler: "todo.update",
    config: {
      policies: [],
      auth: false,
    },
  },

];
