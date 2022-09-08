const routes = (router) => {
  router.use("/", (_req, res) => {
    res.send("foo");
  });

  return router;
};

module.exports = routes;
