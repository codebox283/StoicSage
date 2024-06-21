import '../styles/Form.css';

function Form(){
    return(
        <div className="NewsForm">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email Adress"/>
            <input type="checkbox"/><p>I agree to the Privacy Policies</p>
        </div>
    );
}

export default Form;