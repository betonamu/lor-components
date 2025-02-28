const Input = ({ value = "", onChange, ...props }) => {
    return (
        <div>
            <input type="text" value={value} onChange={onChange} {...props} />
        </div>
    );
};

export default Input;
