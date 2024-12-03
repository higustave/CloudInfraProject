import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        andrewID: '',
        courseGrade: '',
    });
    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/submit', formData);
            setResponse(JSON.stringify(res.data));
        } catch (err) {
            console.error(err);
        }
    };

    return (
      <div class="parent" style={{display: 'grid',placeItems:'center',height: '100vh'}}>
        <div class="child" style={{textAlign:'center'}}>
            <h1>Carnegie Mellon University Africa</h1>
            <h1 style={{color:'#97331e' }}>Course Grading Portal</h1>
            <hr/>
            <form onSubmit={handleSubmit} style={{ textAlign: 'center',border:'2px solid silver',padding:'40px',borderRadius:'8px',marginTop:'20px'}}>
                <input name="name" placeholder="Course ID" onChange={handleChange} style={{ marginBottom:'10px' }}/><br/>
                <input name="andrewID" placeholder="Student AndrewID" onChange={handleChange} style={{ marginBottom:'10px' }}/><br/>
                <input name="courseGrade" placeholder="Course Grade" onChange={handleChange} style={{ marginBottom:'10px' }}/><br/>
                <button type="submit" style={{padding:'8px',fontWeight:'bold'}}>Submit</button>
            </form>
            <div>{response}</div>
        </div>
      </div>
    );
}

export default App;
