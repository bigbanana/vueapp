import user from './user'
import list from './list'
import detail from './detail'

const pages = [
  user,
  list,
  detail,
  {
    path: '/',component:resolve=>require.ensure([],()=>resolve(require('./home.vue')),'pages'),
    meta: {requiresAuth: true}
  },
  {
    path: '/login',component:resolve=>require.ensure([],()=>resolve(require('./login.vue')),'pages'),
    meta: {requiresNoAuth: true}
  },
  {path: '/register',component:resolve=>require.ensure([],()=>resolve(require('./register.vue')),'pages')},
  {path: '/forget',component:resolve=>require.ensure([],()=>resolve(require('./forget.vue')),'pages')},
  {path: '/logout',component:resolve=>require.ensure([],()=>resolve(require('./logout.vue')),'pages')},
  {path: '*',component:resolve=>require.ensure([],()=>resolve(require('./404.vue')),'pages')}
]

export default pages
