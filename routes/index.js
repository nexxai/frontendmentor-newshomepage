var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/preline.js", (req, res, next) => {
  let preline = fs.readFileSync(
    "./node_modules/preline/dist/preline.js",
    "utf-8"
  );
  res.write(preline);
  res.end();
});

module.exports = router;
