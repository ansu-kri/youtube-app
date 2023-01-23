let navbar =()=>{
    return `
    <nav>
        <div id="navbar">
            <div id="left-navbar">
                <a class="menu-icon" id="show-menu">
                    <img class="menu-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArIOY4hWajfIZvhwfGmeQwglnJSCQo3QFVg&usqp=CAU" alt="">
                </a>
                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png" alt="">
            </div>
        </div>
        <div class="middle-navbar">
            <div class="search-box">
                <input  type="text" id="query" placeholder="Search">
                <img class="search-btn" onclick="searchVideos()"  src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="">
            </div>

            <img class="mic-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOBVN8fxdrPp2EPqrKNmkvlF34xDB0zjBXQ&usqp=CAU" alt="">
            

        </div>
        <div class="right-navbar">

            <img src="https://t4.ftcdn.net/jpg/02/28/25/39/360_F_228253920_JDxct27B2o2dGP4YYLug6XYTGphQZDji.webp" alt="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTW-1UnHzDjAH6ETwe0XLnM2rp0WKQ3wwbA&usqp=CAU" alt="">
            <img class="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHLv0PMhlGJCUvvAwW_vIeEjoqOD3tMxwqA&usqp=CAU" alt="">
           <a href="signin.html"> <img class="user-icon" src="https://yt3.ggpht.com/485DTB-m547MSy51huwAZN0QnR1WNJnFk9Rb-Fs4DtA8Fu2p-nGeAjHG7jnyZ0Tz6YFjgd5qBw8=s108-c-k-c0x00ffffff-no-rj"></a>
        </div>
        <div class="sidebar">
            <div class="shortcut-links">
                
    
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsFf2WcSixuFRX6DFff_5_8Bukik_7IuW_Q&usqp=CAU" alt=""><p>Home</p></a>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qbZQv3ehUpFRYaBrE---B6rtuoEiY5_4vw&usqp=CAU" alt=""><p>Explore</p></a>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2E_2aSMD0c6q2Q_-t4zuxwldS3k7iX7bPyQ&usqp=CAU" alt=""><p>Subscription</p></a>
                <hr>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgGfXZGAnCLDwx2L4IgXzHdwv9e4p_KISeQ&usqp=CAU" alt=""><p>Library</p></a>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_IYQJAm_BkvZe1zOSSBgP3IGALXnjMaOlw&usqp=CAU" alt=""><p>History</p></a>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFUgCFysqwZkBTAZm16F_P_Z7DZFIKYIP4Q&usqp=CAU" alt=""><p>Playlist</p></a>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCbJgWDfuMKDILZkUjC3KZv138OEE5vlq5Q&usqp=CAU" alt=""><p>Download</p></a>
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQci671fwnjVufArPs_iHZAbqWxJov3-rSeiQ&usqp=CAU" alt=""><p>Show More</p></a> 
                <hr>
                <h2>Subscription</h2>
    
    
            </div>
    
        </div>
    </nav>
    `
}
export {navbar}