import TodoInsert from "./TodoInsert";

const TodoHead = (props)=>{
  return(
    <header>
      <h1>일정관리</h1>
      <TodoInsert />
    </header>
  );
};

export default TodoHead;