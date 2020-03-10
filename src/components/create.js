import React from 'react';

const Create = ({submit, changeHandler}) =>{

    const formStyle = {
        padding: '12px 15px',
    }

    return(
        <div>
            <form onSubmit={submit} style={formStyle}>

            <input name="id" onChange={changeHandler} ></input>
            <select name="name" onChange={changeHandler}>
                <option value="people">Person</option>
                <option value="planets">Planet</option>
            </select>
            <br/>
            <button>Search</button>
            </form>
        </div>

    )
}

export default Create;