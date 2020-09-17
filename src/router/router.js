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

ROUTER.get("/page3", (req, res) => {
  res.render("page3");
  console.log("page3");
});

export default ROUTER;
