import React, {useCallback} from 'react';
import BasicLayout from "../../layouts/BasicLayout";
import {Outlet, useNavigate} from "react-router-dom";

//todo에서만 사용하는 레이아웃
function IndexPage(props) {

    const navigate = useNavigate();

    const handleClickList = useCallback( () => {
        navigate({pathname:'list'})
    },[])

    const handleClickAdd = useCallback( () => {
        navigate({pathname:'add'})
    },[])

    return (
        <BasicLayout>
            {/*BasicLayout의 childern으로 들어가는 값*/}
            <div className="w-full flex m-2 p-2 ">
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
                onClick={handleClickList}
                >LIST</div>
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
                onClick={handleClickAdd}
                >ADD</div>
            </div>
            <div className="flex flex-wrap w-full">
                {/*서브메뉴 만들기용*/}
                <Outlet/>
            </div>
        </BasicLayout>
    );
}

export default IndexPage;