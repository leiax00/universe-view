import UvLayout from '@/components/UvLayout';

export const whiteList = ['/login', '/auth-redirect'];
export const constantRoutes = [
  {
    path: '/',
    component: UvLayout,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "user" */ '@/views/Home'),
        meta: { title: '首页', roles: [] },
      },
    ],
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "error" */ '@/components/ErrorPage/Page404'),
    hidden: true,
  },
  {
    path: '/403',
    component: () => import(/* webpackChunkName: "error" */ '@/components/ErrorPage/Page403'),
    hidden: true,
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/404' },
];

export const asyncRoutes = [
  {
    path: '/',
    redirect: '/index',
    component: UvLayout,
    children: [
      // {
      //   path: '/md',
      //   name: 'md-editor',
      //   component: () => import(/* webpackChunkName: "error" */ '@/views/md-edit'),
      // },
    ],
  },

];
