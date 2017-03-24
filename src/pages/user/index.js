const user = {
  path:'/user',
  component:resolve=>require.ensure([],()=>resolve(require('./index.vue')),'user'),
  meta: {requiresAuth: true},
  children: [
    {path:'',component:resolve=>require.ensure([],()=>resolve(require('./base.vue')),'user')},
    {path:'order',component:resolve=>require.ensure([],()=>resolve(require('./order.vue')),'user')},
    {path:'history',component:resolve=>require.ensure([],()=>resolve(require('./history.vue')),'user')},
    {path:'settings',component:resolve=>require.ensure([],()=>resolve(require('./settings.vue')),'user')},
    {path:'develop',component:resolve=>require.ensure([],()=>resolve(require('./develop.vue')),'user')}
  ]
}

export default user
