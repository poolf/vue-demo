import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading


Vue.use(Router)





export const constantRouterMap = [
	{ path: '/login', component: _import('Login'), hidden: true },
	{
		path: '/',
		name: 'Index',
		component: _import('Index')
	}/*,

	{ path: '/authredirect', component: _import('login/authredirect'), hidden: true },
	{ path: '/404', component: _import('errorPage/404'), hidden: true },
	{ path: '/401', component: _import('errorPage/401'), hidden: true }*/
]

export const asyncRouterMap = [];

var router = new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRouterMap
});


router.beforeEach((to, from, next)=>{
	next(true);
});

export default router;




