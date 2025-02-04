import React from 'react';
import {Link} from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

/*function MainPage(props) {
    return (
        <div className={'text-3xl'}>

            <div className={'flex'}>
                {/!*Link를 통해 url을 이동하면 AboutPage의 Loading이 나타나지 않음*!/}
                <Link to={'/about'}>About</Link>
            </div>


            <div>Main Page</div>
        </div>
    );
}*/


function MainPage(props) {
    return (
        <BasicLayout>
            {/*childern으로 넣을 값을 입력*/}
            <div className={'text-3xl'}>Main Page</div>
        </BasicLayout>
    );
}


export default MainPage;