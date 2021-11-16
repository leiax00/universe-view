import { i18n } from '@/plugins/vueI18n'

export const routes = [
  {
    path: '/',
    component: () => import('@/components/UvLayout'),
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "user" */ '@/views/Home'),
        meta: { title: i18n.global.t('title.home'), roles: [] },
      },
      {
        path: 'hello',
        component: () => import(/* webpackChunkName: "user" */ '@/views/HelloWorld'),
        meta: { title: i18n.global.t('title.home'), roles: [] },
      },
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/Home'),
        meta: { title: i18n.global.t('title.home'), roles: [] },
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
]

export const asyncRoutes = []