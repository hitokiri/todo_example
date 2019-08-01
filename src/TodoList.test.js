import TodoList from './modules/todo';

describe('todoList', () => {
    describe('click', () => {
        it("should return true", ()=>{
            //Arrange
            let click = new TodoList()
            let item = { text: 'Romantic dinner', done: true }
            //Act
            let function_click = click.handleItemClick(item )
        })
    })
})