/*--------------------set up-------------*/
const index_container = document.querySelector(".index_container"); /* chọn ra element đầu tiên trong file HTML chứa class .index-container */
/*--------------------set up-------------*/

/*----------------- hàm tạo bảng ----------*/
function create_index() {
    
    /*  các bước thêm element vào container bằng JS 
    const [tên biến thành phần con (child)] = document.createElement("[tag của element]");
    [tên child].classList.add("[tên class của element]");
    [tên biến thành phần mẹ (parent)].appendChild([tên child]);
    */
    
    const heading = document.createElement("h2");
    heading.classList.add("index_heading");
    heading.innerText = "Tất Cả Blog";
    index_container.appendChild(heading);
    
    const mainList = document.createElement("ul");
    mainList.classList.add("content_list");
    index_container.appendChild(mainList);

    const Author = [ "Đặng Minh Hoàng", "Tác giả 2" ];                          //list chứa tên Author
    const Blogs = 
    [
        // //Tên tác giả
        // [ 
        //     [*link blog 1, *tên blog 1],
        //     [*link blog 2, *tên blog 2],
        //     [*link blog 3, *tên blog 3],
        // ],
        
        //Đặng Minh Hoàng
        [ 
            ["#" , "tên blog 1"],
            ["#" , "tên blog 2"],
            ["#" , "tên blog 3"],
        ],
        //Tác giả 2
        [ 
            ["#" , "tên blog 4"],
            ["#" , "tên blog 5"],
            ["#" , "tên blog 6"],
        ],        
    ]
    for( let i = 0; i< Author.length; ++i){
    
        const content_li = document.createElement("li");
        content_li.classList.add("content");
        mainList.appendChild(content_li);

        const author_name_span = document.createElement("span");
        author_name_span.classList.add("author_name");
        author_name_span.innerText = Author[i];                     //Hiển thị tên của Author tương ứng với thứ tự trong list
        content_li.appendChild(author_name_span);

        const blog_list = document.createElement("ul");
        blog_list.classList.add("blog_list");
        content_li.appendChild(blog_list);

        for (let j = 0; j< Blogs[i].length; ++j){
            const blog_li = document.createElement("li");
            blog_li.classList.add("blog");
            blog_list.appendChild(blog_li);

            const blog_link = document.createElement("a");
            blog_link.setAttribute("href", Blogs[i][j][0]);     //Set link đến blog
            blog_link.innerText = Blogs[i][j][1];                //Set tên blog
            blog_li.appendChild(blog_link);
        }
    }
}
create_index();
