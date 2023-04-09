import './Input.css'

const Input = ({text, result}) => {
    return (
        <div className='input-wrapper'>
            <div className='result'> {result} </div>
            <div className='text'> {text} </div>
        </div>
    );
};

export default Input;