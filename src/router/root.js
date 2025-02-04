import {createBrowserRouter} from "react-router-dom";

import {lazy, Suspense} from "react";
import todoRouter from "./todoRouter";


/*// 기본 라우팅 설정
const root = createBrowserRouter([
    {
        //경로
        path: '',
        //어떤 컴포넌트
        element: <MainPage/>

        //여기 들어갈 경로와 컴포넌트가 많으면 다 처리하고 확인해야해서 속도가 느림
        //이 문제를 해결하기 위해 '코드 스플린팅' 사용
    }

]);*/


const Loading = <div className={'bg-red-700'}>Loading...</div>

//지연 로딩 설정
const Main = lazy(() =>  import("../pages/MainPage"))

const About = lazy(() =>  import("../pages/AboutPage"))

const TodoIndex = lazy(() =>  import("../pages/todo/indexPage"))

const TodoList = lazy(() =>  import("../pages/todo/ListPage"))


const root = createBrowserRouter([

    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()      // childer에 들어갈게 많아지므로 따로 js로 분리

    },

]);






export default root;