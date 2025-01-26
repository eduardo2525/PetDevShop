import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SerachController from '../controllers/serchController';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/seeach', SerachController.serach)

export default router;