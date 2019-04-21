export default
  [
    {
      path: '/', component: '../layouts/index.js',
      routes: [
        { path: '/', exact: true, redirect: '/takeout' },
        { path: '/takeout', component: './TakeOut/index.js' },
        { path: '/discover', component: './Discover/index.js' },
        { path: '/order', component: './Order/index.js' },
        { path: '/my', component: './My/index.js' },
      ],
    },
  ]
