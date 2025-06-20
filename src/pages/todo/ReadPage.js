import React from 'react';
import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";

function ReadPage(props) {

    const navigate = useNavigate();
    const {tno} = useParams();



    //기존의 페이지값이 이동할 때 같이 이동하도록
    const [queryParams] = useSearchParams();

    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;

    const queryStr = createSearchParams({page: page, size: size}).toString();




    console.log(tno);

    const moveToModify = (tno) => {

        navigate({
            pathname: `/todo/modify/${tno}`,
            search: queryStr
        })
    }

    const moveToList = () => {
        navigate({
            pathname: `/todo/list`,
            search: queryStr
        })
    }

    return (
        <div className={'text-3xl'}>
            Todo Read Page {tno}

            <div>
                <button onClick={() => moveToModify(tno)}>Test Modify</button>
                <button onClick={moveToList}>Test List</button>
            </div>
        </div>
    );
}

export default ReadPage;