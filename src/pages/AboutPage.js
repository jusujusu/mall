import React from 'react';
import {Link} from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

/*function AboutPage(props) {
    return (
        <div className={'text-3xl'}>

            <div className={'flex'}>
                {/!*Link를 통해 url을 이동하면 AboutPage의 Loading이 나타나지 않음*!/}
                <Link to={'/about'}>About</Link>
            </div>

            About Page
        </div>
    );
}*/

function AboutPage(props) {
    return (

        <BasicLayout>
            {/*childern으로 넣을 값을 입력*/}
            <div className={'text-3xl'}>About Page</div>
        </BasicLayout>
    );
}

export default AboutPage;