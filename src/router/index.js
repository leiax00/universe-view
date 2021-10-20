import { createRouter, createWebHistory } from 'vue-router';
import NProcess from 'nprogress';
import 'nprogress/nprogress.css';
import { constantRoutes } from './ConstRouter';
import store from '@/store';

const newRouter = () => {
  return createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
  });
};

const router = newRouter();

export function resetRouter() {
  const newRouter = newRouter();
  router.matcher = newRouter.matcher; // reset router
}

router.beforeEach(async(to, from, next) => {
  NProcess.start();
  document.title = 'aaaaa';
  next();
});

router.afterEach(() => {
  NProcess.done();
});

export default router;
