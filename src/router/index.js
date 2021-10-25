import {createRouter, createWebHistory} from "vue-router";
import NProcess from 'nprogress';
import 'nprogress/nprogress.css';

const newRouter = () => {
    return createRouter({
        history: createWebHistory(import.meta.env.VITE_APP_PREFIX),
        routes: []
    })
};

const router = newRouter();

export function resetRouter() {
    const newRouter = newRouter();
    router.matcher = newRouter.matcher; // reset router
}

router.beforeEach(async(to, from, next) => {
    NProcess.start();
    document.title = import.meta.env.VITE_APP_TITLE;
    next();
});

router.afterEach(() => {
    NProcess.done();
});

export default router;
