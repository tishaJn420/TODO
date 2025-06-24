export const AddTodo = ({
  inputName,
  setInputName,
  handleAddTodo,
  error,
  setError,
}) => (
    <>
  <div className="d-flex justify-content-center align-items-center">
    <input
      type="text"
      value={inputName}
      onChange={(e) => {
        setInputName(e?.target?.value);
        setError("");
      }}
      onKeyDown={handleAddTodo}
      className="todoInput"
      placeholder="Add a new TODO"
    />
    <button
      className="btn btn-primary ms-2"
      onClick={() => handleAddTodo({ key: "Enter" })}
      type="button"
    >
      Add
    </button>
  </div>
    <span style={{color:'red'}}>{error}</span>
  </>
);