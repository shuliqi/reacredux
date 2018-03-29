function addTodo(text){
    return {
        type:ADD_TDO,
        text
    }
}
function selectTODO(name) {
    return {
        type:SELECT_TODO;
        name

    }
}
