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

