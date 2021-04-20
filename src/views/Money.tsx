import Layout from "../components/Layout";
import {NumberPadSection} from "./Money/NumberPad";
import {TagsSection} from "./Money/Tags";
import {CategorySection } from "./Money/Category";
import {NotesSection} from "./Money/Notes";
import React from "react";
import ReactDOM from "react-dom"
import styled from "styled-components";

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

let inputVal = '0';
function input (arg: String){
    if(inputVal==='0'){
        inputVal=''
    }
    inputVal = inputVal + arg;
    ReactDOM.render(
    // @ts-ignore
        <Output data={inputVal} />,
        document.getElementById('output')
    );
}
class Output extends React.Component {
    render() {
        return (
            <div className='output' id='output'>{inputVal}</div>
        )
    }
}

const padArr = ['1','2','3','C','4','5','6','CA','7','8','9','OK','0','.'];
class NumberPad extends React.Component {
    render() {
        const listItems = padArr.map((number: string, index) =>
            <button key={index} onClick={() => input(number)}>{number}</button>
        );
        return <div className="pad clearfix" id='pad'>{listItems}</div>
    }
}
const tagsName = ['穿衣', '美食', '房租', '乘车', '带娃', '宠物', '话费', '水电'];
class TagsLi extends React.Component {
    render() {
        const tagLi = tagsName.map((n:String, index) =>
            <li key={index}>{n}</li>
        );
        return <ol>{tagLi}</ol>
    }
}
function Money() {
    return (
        <MyLayout>
            <TagsSection>
                <TagsLi/>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="在这里添加备注"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <Output />
                <NumberPad/>
            </NumberPadSection>
        </MyLayout>
    )
}

export default Money;
