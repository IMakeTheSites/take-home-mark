import express from "express";
import { get } from "../controller/country";

const router = express.Router();

router.get("/:countryCode", get);

export default router;
