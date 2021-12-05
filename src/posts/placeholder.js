 {posts.map((post: any) => {
    return(
        <Link className = "posts" to = {"/posts/" + post.id}>
            <div className = "outside-border-posts"> 
                <div className = "inside-border-posts">
                    <div className = "post-content" >
                    <div>
                        <img src={ post.photoURL } className = "view-posts-photo" alt= "placeholder"/>
                    </div>
                        <div className = "post-title-view-posts">
                            { post.postTitle }
                        </div>
                        <div className = "post-author-view-posts">
                            {post.author}
                        </div>
                        <div className = "post-author-view-posts">
                            {post.category}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
})}

<Row>

<Col span={6}>
    {leftPosts.map((post: any) => {

            return(
                <Link className = "posts" key="{post}" to = {"/posts/" + post.id}>
                    <div className = "outside-border-posts"> 
                        <div className = "inside-border-posts">
                            <div className = "post-content" >
                            <div>
                                <img src={post.photoURL} className = "view-posts-photo" alt= "placeholder"/>
                            </div>
                                <div className = "post-title-view-posts">
                                    { post.postTitle }
                                </div>
                                <div className = "post-author-view-posts">
                                    {post.author}
                                </div>
                                <div className = "post-author-view-posts">
                                    {post.category}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            );
    })}

</Col>

<Col span={6}>
    {rightPosts.map((post: any) => {
            return(
                <Link className = "posts" to = {"/posts/" + post.id}>
                    <div className = "outside-border-posts"> 
                        <div className = "inside-border-posts">
                            <div className = "post-content" >
                            <div>
                                <img src={ post.photoURL } className = "view-posts-photo" alt= "placeholder"/>
                            </div>
                                <div className = "post-title-view-posts">
                                    { post.postTitle }
                                </div>
                                <div className = "post-author-view-posts">
                                    {post.author}
                                </div>
                                <div className = "post-author-view-posts">
                                    {post.category}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            );
    })}
</Col>
</Row> 