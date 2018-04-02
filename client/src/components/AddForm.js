import React from 'react'
import { changeName, changeAge } from '../actions'


const AddForm = ({ store }) => {
  const { name, age } = store.getState().form;

  return (
    <div>
      <form>
        <label>
          名前:
          <input value={name} onChange={e => store.dispatch(changeName(e.target.value))} />
        </label>
        <label>
          年齢:
          <input value={age} onChange={e => store.dispatch(changeAge(e.target.value))} />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default AddForm;
