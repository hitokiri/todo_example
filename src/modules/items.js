import React from 'react'

export default function TodoItem(props) {
    return (
        <li onClick={props.onClick}> <input type="checkbox" readOnly name="done" id="done" checked={props.item.done} />{props.item.text}</li>
    )
}
