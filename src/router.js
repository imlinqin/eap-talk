import Loadable from 'react-loadable'

//标记： 在定义我们的路由对象，使用react-loadable 对路由组件进行懒加载。
const loadable = (filename) => Loadable({
    loader: () => import(`./pages/${filename}`),
    loading: () => ('')
});


//路由配置对象
const routers = [
    {
        path: '/index',
        exact: false,
        component: loadable('course/index')
    },
   

];

export default routers;
