export const toggoleSideBar=(value)=>{
    return (dispatch)=>{
        dispatch({
            type:"toggleSidebar",
            payload:value
        })
    }
}
export const setWindowWidth=(value)=>{
    return (dispatch)=>{
        dispatch({
            type:"setWindowWidth",
            payload:value
        })
    }
}