let bagItems=[];

onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItems();
  bagCount();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItem',JSON.stringify(bagItems));
  bagCount();
}

 function bagCount(){
  let bagCounter=document.querySelector('.bagItemCount');
  if(bagItems.length>0){
    bagCounter.style.visibility = 'visible';
  bagCounter.innerText=bagItems.length;
 }
 else{
  bagCounter.style.visibility='hidden';
 }
 }
function displayItems(){
  let itemsContainerElement=document.querySelector('.items-container');
 if(!itemsContainerElement){
  return;
 }
  let innerHTML=``;
  items.forEach(item => {
      innerHTML+=`
      <div class="item-container">
       <img class="item-img" src="${item.image}" alt="item">
        <div class="stars">
        ${item.rating.stars}⭐|${item.rating.count}
        </div>
         <div class="company">${item.company}</div>
         <div class="item-name">${item.item_name}</div>
         <div class="price-container">
           <span class="current-price">Rs.${item.current_price}</span>
           <span class="original-price">Rs.${item.original_price}</span>
           <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
         </div>
      <div class="btn-bag" onclick="addToBag(${item.id});">Add to Bag</div>
      </div>
      `
  });
  
  itemsContainerElement.innerHTML=innerHTML;
  bagCount();
}
 