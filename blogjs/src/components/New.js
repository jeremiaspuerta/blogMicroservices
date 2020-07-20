import React from 'react'
import { render } from '@testing-library/react'
import '../styles/New.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

const New = () => (
    <Link to="/new">
        <div className="Boton">
            <button className="btn btn-success btn-circle m-1">+</button>
        </div>
    </Link>
)

export default New