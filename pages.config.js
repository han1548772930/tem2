export default {

  // 自动读取src/views下的vue文件，生成路由信息，默认路由路径'/‘
  dirs: [{ dir: 'src/views', baseRoute: '/' }],
  // 异步方式加载路由组件
  importMode: 'async',
  // 遍历路由信息，给默认路由加一个redirect
  extendRoute(route) {
    if (route.path === '/') return { ...route, redirect: 'a' }
  },

}
