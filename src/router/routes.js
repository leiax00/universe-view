import i18n from "@/components/i18n";

export const routes = [
  {path: '/', name: 'tmp redirect', redirect: '/hello'},
  {
    path: '/',
    component: () => import('@/components/UvLayout'),
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "user" */ '@/views/Home'),
        meta: {title: i18n.global.t('title.home'), roles: []},
      },
      {
        path: 'hello',
        component: () => import(/* webpackChunkName: "user" */ '@/components/HelloWorld'),
        meta: {title: i18n.global.t('title.hello_world'), roles: []},
      },
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/Home'),
        meta: {title: i18n.global.t('title.hello_world'), roles: []},
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
  {path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/404'},
]

export const asyncRoutes = []

