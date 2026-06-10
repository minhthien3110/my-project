/*Viết mã javacript*/
//khai báo 1 đối tượng lưu thông tin sản phẩm
const products=[
{
name:"Phong cảnh",
price:50,
description: "Đây là ảnh Phong Cảnh nổi tiếng ở Việt Nam và Nước Ngoài",
image:"../assets/images/phong canh.jpg",
link:"chi-tiet.html"
},

{
name:"Phong cảnh",
price:50,
description: "Đây là ảnh Phong Cảnh nổi tiếng ở Việt Nam và Nước Ngoài",
image:"../assets/images/phong canh.jpg",
link:"chi-tiet.html"
},

{
name:"Phong cảnh",
price:50,
description:"Đây là ảnh Phong Cảnh nổi tiếng ở Việt Nam và Nước Ngoài",
image:"../assets/images/phong canh.jpg",
link:"chi-tiet.html"
}
];


function createItem(obj)

{
  //Xác định khung chứa product-list
                const listProducts= document.getElementById("product-list");//tác động đến thẻ <div>có id = "product-list"
            
            //Tạo 1 container có class = "item"
            const item = document.createElement("div");
            item.setAttribute("class","item");//<div class = "item"></div>
            // Tạo 2 khung chứa hình ảnh và thông tin
            //Tạo 1 container chứa hình ảnh có class ="image"==>chỉ có 1 con là <img>
            const containerImage = document.createElement("div");
            containerImage.setAttribute("class", "image");//<div class = "item"></div>

            //Tạo ảnh
            const img= document.createElement("img");
            img.setAttribute("src", obj.image);
            img.setAttribute("alt", obj.name);
            img.setAttribute("style","width:100%;max-width:150px");
            
            //Đưa hình ảnh vào khung
            containerImage.appendChild(img);

            //Tạo 1 container chứa thông tin sản phẩm có class = "info"==>có 3 <p> và 1 <a>
             const containerInfo= document.createElement("div");//<div></div>
             containerInfo.setAttribute("class", "info");//<div class = "Info"></div>

             //Tạo <p> tên sản phẩm 
                const nameProduct = document.createElement("p");
                nameProduct.innerHTML= obj.name;

            //Tạo <p> chứa giá sản phẩm
                const  price = document.createElement("p");
                price.innerHTML = obj.price + "/1 bức";
            //Tạo <p>chứa mô tả sản phẩm
                 const  description = document.createElement("p");
                 description.innerHTML=  obj.description ;

            //Tạo<a> chứa liên kết
                const linkProduct = document.createElement("a");
                linkProduct.innerHTML= "xem chi tiết";
                linkProduct.setAttribute("href", obj.link);//sửa sau

            //Gán 4 con vào khung chứa Info
            containerInfo.appendChild(nameProduct);
            containerInfo.appendChild(price);
            containerInfo.appendChild(description);
            containerInfo.appendChild(linkProduct);

            //Thêm khung chứa image và info vào item
            item.appendChild( containerImage);
            item.appendChild(containerInfo);

            //Thêm item vào list product 
            listProducts.appendChild(item);


}
function loadAllProducts(objArray)
{
    let i;
    for(i=0; i<objArray.length; i++)
    {
        createItem(objArray[i]);
    }
}
