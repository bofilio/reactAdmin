import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { UiActions } from '../redux/ui/actions/index';
import { bindActionCreators } from 'redux';

export const useAction = () => {
    const dispatch =useDispatch();
    const { toggoleSideBar,setWindowWidth } = bindActionCreators(UiActions, dispatch);
    return {toggoleSideBar,setWindowWidth}
}

