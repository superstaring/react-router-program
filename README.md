# react-router

### 创建项目

`npx create-react-app react-router-program`

### 安装插件

`npm i react-router-dom`

### 使用方法

`import { createBrowserRouter, RouterProvider } from 'react-router-dom';`

    const router = createBrowserRouter([{
        path: '/login',
        element: <Login />
    }, {
        path: '/article',
        element: <Article />
    }])
`<RouterProvider router={router}></RouterProvider>`

### 方法

#### 声明式写法

`<Link to="/article">跳转到文章页</Link>`

#### 命令式写法

`import { useNavigate } from "react-router-dom";`
    const navigate = useNavigate();
    <button onClick={() => navigate('/article')}>跳转到文章页</button>

### 传参，两种方式

`import { Link, useSearchParams, useParams } from "react-router-dom";`

#### /article?id=100&name=jack

    const [params] = useSearchParams();
    const id = params.get('id');
    const name = params.get('name');

#### /article/101

路由位置： `path: '/article/:id'`

`const { id } = useParams();`
   
### 嵌套路由

在一级路由中又内嵌了其他路由，这种关系就叫做嵌套路由。嵌套至一级路由中的路由叫二级路由。

配置二级路由渲染位置：

`<Outlet />`

### 默认二级路由

当访问一级路由的时，默认的二级路由可以得到渲染，只需要在二级路由的位置去掉path，设置index属性为true。

### 404路由配置

当浏览器输入url的路径在整个路由配置中都找不到对应的path，为了用户体验，可以使用404兜底组件进行渲染。

    {
        path: '*',
        element: <NotFound />,
    }

### 两种路由模式

各个主流框架的路由常用的路由模式有两种，`history模式`和`hash模式`，ReactRouter分别由`createBrowerRouter`和`createHashRouter`函数负责创建。
history模式需要后端支持。