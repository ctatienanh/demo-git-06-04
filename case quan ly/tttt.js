result += ` <div class="grid_colum_2-10">
                       <div class="product-item">
                           <div class="product-item--content">
                           <img width="100%" src="${productItem[i].img}"> 
                           <div class="ticket-item-content">
                               <h3 class="ticket-item--title">${productItem[i].nameTicket}</h3>
                                <span>Ngày khởi chiếu:</span>
                                <p class="ticket-item--dateShow">${productItem[i].dateShow}</p>
                                <div class="ticket-item-price">
                                    <span>Price : </span>
                                   <p class="ticket-item--price-translate">${productItem[i].priceTicket}</p>
                                    -
                                   <p class="ticket-item--pricePromo">${productItem[i].priceTicketPromo}</p>
                                </div>
                                <div class="ticket-item-content_footer">
                                     <button onclick="buyTicket(${i})" class="ticket-item-content--btn">Mua ngay</button>
                                      <a href="" class="ticket-item-content--link">Xem thêm</a>
                                 </div>
                            </div>
                           </div>
                       </div>
                    </div>`