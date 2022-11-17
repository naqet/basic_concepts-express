import { Router } from "express";
import healthcheck from "../../controllers/healthcheck";

const router = Router();

router.get("/", healthcheck.handleHealthcheck);

export default router;
