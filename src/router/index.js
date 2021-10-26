import {createRouter, createWebHistory} from "vue-router";
import NProcess from 'nprogress';
import 'nprogress/nprogress.css';
import commonRoutes from "@/router/commonRoutes";
import {getTitle} from "@/utils";

const newRouter = () => {
    return createRouter({
        history: createWebHistory(import.meta.env.VITE_APP_PREFIX),
        routes: commonRoutes
    })
};

const router = newRouter();

export function resetRouter() {
    const newRouter = newRouter();
    router.matcher = newRouter.matcher; // reset router
}

router.beforeEach(async (to, from, next) => {
    NProcess.start();
    document.title = getTitle(to.meta.title);
    next();
});

router.afterEach(() => {
    NProcess.done();
});

export default router;
