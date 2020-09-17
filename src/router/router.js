import express, { Router } from "express";

const ROUTER = express.Router();

ROUTER.get("/", (req, res) => {
  res.render("page1");
  console.log("page1 ");
});

ROUTER.get("/page2", (req, res) => {
  res.render("page2");
  console.log("page2");
});

export default ROUTER;
