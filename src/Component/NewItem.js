import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createItem } from '../Action/index'

function NewItem(props) {
 
    const [name, setname] = useState('')
    const [desc, setdesc] = useState('')
    const [image, setimage] = useState(null)

    const send = (e) => {
        e.preventDefault()
        let data = {
          name: name,
          image: image,
          desc: desc,
        }
        props.createItem(data)  
        window.location.replace('/')
    }

    const uploadSingleFile = (e) => { 
        setimage(URL.createObjectURL(e.target.files[0]))
    }

    let imgPreview;
    if (image) imgPreview = <img src={image} alt='' className='image' />;

  return (
    <center>
        <div className='shadow p-3 mb-5 bg-body rounded newItem'>
        <form>  
            <h3>TITLE</h3>
            <div className="form-group preview">
                {imgPreview}
            </div>
            <div className="imageFile">
              <input type="file" className="form-control" onChange={uploadSingleFile}/>
            </div>
            <div className="form-group">
              <label className='form-label'>Nombre</label>
              <input
                type="text"
                className="form-control"
                required
                value={name}
                onChange={(e)=>setname(e.target.value)}
                name="name"
              />
            </div>
            <div className="form-group">
              <label className='form-label'>Descripcion</label>
              <textarea
                type="text"
                className="form-control"
                required
                value={desc}
                onChange={(e)=>setdesc(e.target.value)}
                name="description"
                
              />
            </div>
            <button onClick={send} className="btn btn-dark btn-block">CREAR</button>
        </form>
    </div>
    </center>
  )
}

export default connect(null, {createItem})(NewItem);