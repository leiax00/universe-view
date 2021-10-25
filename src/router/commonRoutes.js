const commonRoutes = [
  {path: '/', name: 'tmp redirect', redirect: '/hello'},
  {
    path: '/',
    component: () => import('@/components/UvLayout'),
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "user" */ '@/views/Home'),
        meta: {title: '首页', roles: []},
      },
      {
        path: 'hello',
        component: () => import(/* webpackChunkName: "user" */ '@/components/HelloWorld'),
        meta: {title: 'Hello World', roles: []},
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

export default commonRoutes
