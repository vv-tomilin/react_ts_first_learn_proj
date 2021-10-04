import React from "react";

const TodoForm: React.FC = () => {
    return (
        <div className="input-field mt2">
            <input type="text" id="title" placeholder="Ввведите название дела"/>
            <label htmlFor="title" className="active">Ввведите название дела</label>
        </div>
    );
}

export default TodoForm;