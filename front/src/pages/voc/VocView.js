import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './VocView.css';

function GetData(vocId) {
  const [write, setWrite] = useState({});
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/voc/search/'+vocId).then((response)=> {
        setWrite(response.data.write);
        setAnswer(response.data.answer);
    })
  }, []);

  const item =  (<>
    <h2 align="center">게시글 상세정보</h2>
    <div className="voc-view-wrapper">
        <div className="voc-view-row">
            <label>게시글 번호</label>
            <label>{ write.id }</label>
        </div>
        <div className="voc-view-row">
            <label>제목</label>
            <label>{ write.title }</label>
        </div>
        <div className="voc-view-row">
            <label>작성일</label>
            <label>{ write.createDate }</label>
        </div>
        <div className="voc-view-row">
            <label>내용</label>
            <div>
                {
                write.content
                }
            </div>
        </div>
    </div></>)

    return item;
}

function VocView() {
  const{vocId} = useParams();
  const item = GetData(vocId);

  return (<>
    <div>
        {item}
    </div>
  </>);
}
  
export default VocView;