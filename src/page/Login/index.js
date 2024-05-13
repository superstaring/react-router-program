import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>我是登录页</div>
            {/* 声明式写法 */}
            <Link to="/article">跳转到文章页</Link>
            <br />
            {/* 命令式写法 */}
            <button onClick={() => navigate('/article')}>跳转到文章页</button>
            <br />
            <button onClick={() => navigate('/article?id=100&name=jack')}>传参1</button>
            <br />
            {/* <button onClick={() => navigate('/article/101')}>传参2</button> */}
        </>
    )
}

export default Login;