const detail = {
  path:'/detail',
  component:resolve=>require.ensure([],()=>resolve(require('./index.vue')),'detail'),
  meta: {requiresAuth: true},
}

export default detail
