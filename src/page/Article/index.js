import { Link, useSearchParams, useParams } from "react-router-dom";

const Article = () => {
    // /article?id=100&name=jack
    const [params] = useSearchParams();
    const id = params.get('id');
    const name = params.get('name');

    // /article/101
    // const { id: id2 } = useParams();
    return (
        <>
            <div>我是文章页</div>
            <Link to="/login">跳转到登录页</Link>
            <p>接收参数1：{id}-{name}</p>
            {/* <p>接收参数2：{id2}</p> */}
        </>
    )
}

export default Article;