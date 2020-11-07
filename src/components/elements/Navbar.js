import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <Container>
                <Link to="/" className="navbar-brand">
                    Customer Query Book
                </Link>
                <div>
                    <Link to="/queries/add" className="btn btn-light ml-auto">
                        Add Complaints
                    </Link>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar
