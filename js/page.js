//翻页
function getPage(currPage){
  var dataCount=50;  //总数据条数
  var pageSize=8;    //每页显示条数
  var pageCount= Math.ceil(dataCount / pageSize); //总页数
  if(currPage==0||currPage>pageCount){
    return;
  }
  var ul=$(".listul");
  ul.empty();
  //console.log(pageCount+"..."+currPage)
  paintPage(pageCount,currPage);   //绘制页码
  
  var startPage = pageSize * (currPage - 1);

  if (pageCount == 1) {     // 当只有一页时 
    for (var j = 0; j < dataCount; j++) {  
    var e = '<li><div style="width: 150px; height: 150px;margin:0 auto;"><img src="images/萤火之森.jpg" class="img_material"></div >'+
	          '<div style="width: 170px; height: 70px;word-wrap: break-word;margin:0 auto;text-align: center;">萤火之森'+j+'</div></li>';	
      ul.append(e);    
    }
  }else {      // 当超过一页时 
    var e=""; 
    var endPage = currPage<pageCount?pageSize * currPage:dataCount;
    for (var j = startPage; j < endPage; j++) {  
	  var e = '<li><div style="width: 150px; height: 150px;margin:0 auto;"><img src="images/萤火之森.jpg" class="img_material"></div >'+
	          '<div style="word-wrap: break-word;margin:0 auto;text-align: center;">萤火之森'+j+'</div></li>';	
      ul.append(e);
    }
  }
}

//绘制页码
  function paintPage(number,currentPage)  //number 总页数,currentPage 当前页  
  {
    var pageUl=$(".fenye");
    pageUl.empty();
    var ulDetail="";

    if(number==1){
     ulDetail= "<li class=\"prev\"><a href=\"javascript:void(0)\">上一页</a></li>"+
     "<li class=\"numb choose\"><a href=\"javascript:getPage(1)\">1</a></li>"+
     "<li class=\"next\"><a href=\"javascript:void(0)\">下一页</a></li>";
   }else if(number==2){
     ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage(1)\">上一页</a></li>"+
     "<li class=\"numb"+choosele(currentPage,1)+"\"><a href=\"javascript:getPage(1)\">1</a></li>"+
     "<li class=\"numb"+choosele(currentPage,2)+"\"><a href=\"javascript:getPage(2)\">2</a></li>"+
     "<li class=\"next\"><a href=\"javascript:getPage(2)\">下一页</a></li>";
   }else if(number==3){
     ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage("+parseInt(currentPage-1)+")\">上一页</a></li>"+
     "<li class=\"numb"+choosele(currentPage,1)+"\"><a href=\"javascript:getPage(1)\">1</a></li>"+
     "<li class=\"numb"+choosele(currentPage,2)+"\"><a href=\"javascript:getPage(2)\">2</a></li>"+
     "<li class=\"numb"+choosele(currentPage,3)+"\"><a href=\"javascript:getPage(3)\">3</a></li>"+
     "<li class=\"next\"><a href=\"javascript:getPage("+parseInt(currentPage+1)+")\">下一页</a></li>";
   }else if(number==currentPage&&currentPage>3){
     ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage("+parseInt(currentPage-1)+")\">上一页</a></li>"+
     "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currentPage-2)+")\">"+parseInt(currentPage-2)+"</a></li>"+
     "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currentPage-1)+")\">"+parseInt(currentPage-1)+"</a></li>"+
     "<li class=\"numb choose\"><a href=\"javascript:getPage("+currentPage+")\">"+currentPage+"</a></li>"+
     "<li class=\"next\"><a href=\"javascript:getPage("+currentPage+")\">下一页</a></li>";
   }else if(currentPage==1&&number>3){
     ulDetail= "<li class=\"prev\"><a href=\"javascript:void(0)\">上一页</a></li>"+
     "<li class=\"numb choose\"><a href=\"javascript:void(0)\">1</a></li>"+
     "<li class=\"numb\"><a href=\"javascript:getPage(2)\">2</a></li>"+
     "<li class=\"numb\"><a href=\"javascript:getPage(3)\">3</a></li>"+
     "<li class=\"next\"><a href=\"javascript:getPage(2)\">下一页</a></li>";
   }else{
     ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage("+parseInt(currentPage-1)+")\">上一页</a></li>"+
     "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currentPage-1)+")\">"+parseInt(currentPage-1)+"</a></li>"+
     "<li class=\"numb choose\"><a href=\"javascript:getPage("+currentPage+")\">"+currentPage+"</a></li>"+
     "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currentPage+1)+")\">"+parseInt(currentPage+1)+"</a></li>"+
     "<li class=\"next\"><a href=\"javascript:getPage("+parseInt(currentPage+1)+")\">下一页</a></li>";
   }

   $(".fenye").append(ulDetail);

 }

 function choosele(num,cur){
  if(num==cur){
    return " choose";
  }else{
    return "";
  }
}