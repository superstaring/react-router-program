import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>我是一级路由Layout组件</div>
            <br />
            {/* <Link to="/board">面板</Link> */}
            <Link to="/">面板</Link>
            <br />
            <Link to="/about">关于</Link>
            {/* 配置二级路由渲染位置 */}
            <Outlet />
        </>
    )
}

export default Layout;