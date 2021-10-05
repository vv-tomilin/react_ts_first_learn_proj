import React, {useState} from "react";

const TodoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    };

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(title);
            setTitle('');
            
        }
    };

    return (
        <div className="input-field mt2">
            <input 
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                value={title}
                type="text" 
                id="title" 
                placeholder="Ввведите название дела"/>
            <label htmlFor="title" className="active">Ввведите название дела</label>
        </div>
    );
}

export default TodoForm;