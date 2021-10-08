export const SideBarReducer=(state={open:false,width:260},action)=>{
    switch(action.type){
        case "toggleSidebar":
            return {open:action.payload,width:260};
        default : return state;
    }
}
export const WindowReducer=(state={onMobile:true},action)=>{
    switch(action.type){
        case "setWindowWidth":
           //you need to hundle many event behaviour
            return {onMobile:action.payload};
        default : return state;
    }
}