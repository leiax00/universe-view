import {createRouter, createWebHistory} from "vue-router";
import NProcess from 'nprogress';
import 'nprogress/nprogress.css';
import { routes } from "@/router/routes";
import {getTitle} from "@/utils";
import auth from "@/router/auth";

const newRouter = () => {
    return createRouter({
        history: createWebHistory(import.meta.env.VITE_APP_PREFIX),
        routes: routes
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
    auth.withEach(to, from, next).tryTo()
});

router.afterEach(() => {
    NProcess.done();
});

export default router;
