function toggleMenu() {
    let menu = document.getElementById("menuNav")
    let menuItem = document.getElementsByClassName("menu-item")
    if (menu.classList.contains("active")){
        menu.classList.remove("active")
        toggleOnOff(menuItem, "toggleOff")
        console.log("has")
    }else{
        menu.classList.add("active")
        toggleOnOff(menuItem, "toggleOn")
    }
    console.log(menuItem)
 
  } 
function toggleOnOff(arr, status){
    for(let i = 0; i < arr.length; i++){
        if(status == "toggleOn"){
            arr[i].classList.add("active")
        } else{
            arr[i].classList.remove("active")
        }
        
    }
}


function colorCarouselNavButtons() {
    let url = window.location.href;
    var URL=window.location.href;
    var arr=URL.split('/')

    let carouselIndex = arr[3];
    let list = document.getElementById("carousel-nav-list");
    let items = list.getElementsByTagName("li");
    for (let i = 0; i< items.length; ++i){
        let anchor = items[i].getElementsByTagName("a");
        
        if (anchor[0].classList.contains("carousel-nav-button-active")){
            anchor[0].classList.remove("carousel-nav-button-active");
        }
    }
    let newAnchor;
    switch (carouselIndex){
        case "":
        case "#carousel-slide-1":
            newAnchor = items[0].getElementsByTagName("a");
            newAnchor.classList.contains("carousel-nav-button-active");
        break;
        case "#carousel-slide-2":
            newAnchor = items[1].getElementsByTagName("a");
            newAnchor.classList.contains("carousel-nav-button-active");
        break;
        case "#carousel-slide-3":
            newAnchor = items[2].getElementsByTagName("a");
            newAnchor.classList.contains("carousel-nav-button-active");
        break;
        case "#carousel-slide-4":
            newAnchor = items[3].getElementsByTagName("a");
            newAnchor.classList.contains("carousel-nav-button-active");
        break;
        case "#carousel-slide-5":
            newAnchor = items[4].getElementsByTagName("a");
            newAnchor.classList.contains("carousel-nav-button-active");
        break;

    }
    

console.log(newAnchor);
}