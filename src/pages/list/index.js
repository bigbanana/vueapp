const list = {
  path:'/list',
  component:resolve=>require.ensure([],()=>resolve(require('./index.vue')),'list'),
  meta: {requiresAuth: true},
}

export default list
