import React from 'react';
import TodoItem from './items';

class TodoList extends React.Component {
    render() {
        const { items, onClick } = this.props;
        return (
            <div>
        <ul onClick={onClick}>
            {items.map((item, index) =>
                <TodoItem item={item} key={index}
                          onClick={this.handleItemClick.bind(this, item)}/>)}
        </ul>
        </div>
        );
    }
    handleItemClick(item, event) {
        if(item.done === true){
            event.stopPropagation();
         }else{
           this.props.onItemClick(item, event);
         }
    }
}


export default TodoList

