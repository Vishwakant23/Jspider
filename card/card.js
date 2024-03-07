let product = {
  id: "AA101",
  img: "https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg?v=1691140898",
  name: "iPhone 14 Pro",
  price: 90000,
  qty: 2,
};

let htmlCode = `
        <tr>
            <th scope="row">${product.id}</th>
            <td>
              <img
                src="${product.img}"
                alt=""
                srcset=""
                height="50px"
                width="50px"
              />
            </td>
            <td>${product.name}</td>
            <td>&#8377 ${product.price}</td>
            <td>
                <div class="box">
                    <i class="fa minus fa-minus-circle p-2 " role='button' onclick="handleMinus()"></i>
                    <span class="countDiv">3</span>
                    <i class="fa plus fa-plus-circle p-2" role='button' onclick="handlePlus()"></i>
                </div>
            </td>
            <td>&#8377 ${product.price}</td>
        </tr>
`;

let content = document.querySelector("#content");
content.innerHTML = htmlCode;

