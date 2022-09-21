const TodoItem = (props)=>{
  return(
    <li>
      <h2 className="tit">오늘은 리액트를 공부할 거에요~!({props.num})</h2>
      {/* 인풋과 레이블은 한세트 인풋의 id와 htmlFor의 이름을 일치시킨다 */}
      <label htmlFor="done" className="sr-only"></label>
      <input type="checkbox" id="done" className="done"/>
      <button type="button" className="del">삭제</button>
    </li>
  );
};

export default TodoItem;