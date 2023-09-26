import React, { useState } from 'react'
import axios from 'axios';

function ProdUpload (){
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[brand, setBrand] = useState('');
    const[price, setPrice] = useState('');
    const[condition, setCondition] = useState('');
    const[location, setLocation] = useState('');

    async function products(ev){
        ev.preventDefault();
        try{
            await axios.post('http://localhost:8000/api/seller/postads',{
                title,
                description,
                brand,
                price,
                condition,
                location
            });
        }catch(err){
            console.log('error', err);
        }
    }
    // custom doc page 
    document.title = 'product uploading';

    return(
        <div className='sellerBar'>
            <h2>Creating Products</h2>
            <form onSubmit={products}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" 
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                    required/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" 
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                    required/>
                </p>
                <p>
                    <label>Brand</label><br/>
                    <input type="text" 
                    value={brand}
                    onChange={ev => setBrand(ev.target.value)}
                    required/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" 
                    value={price}
                    onChange={ev => setPrice(ev.target.value)}
                    required/>
                </p>
                <p>
                    <label>Condition</label><br/>
                    <input type="text" 
                    value={condition}
                    onChange={ev => setCondition(ev.target.value)}
                    required/>
                </p>
                <p>
                    <label>Location</label><br/>
                    <input type="text" 
                    value={location}
                    onChange={ev => setLocation(ev.target.value)}
                    required/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Upload</button>
                </p>
            </form>
            
        </div>
    )
}

export default ProdUpload