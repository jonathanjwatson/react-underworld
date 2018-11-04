import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import StateImage from '../../images/state.png';
import JestImage from '../../images/jest.jpg';
import AudioImage from '../../images/audio.jpg';
import CSSImage from '../../images/css.png';
import AuthorizationImage from '../../images/authorization.png';
import APIImage from '../../images/api.png';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Fragment>
            <div className="row center" id="home">
                <div className="jumbotron" id="darkForest">
                    <h1>A Terrible Evil has befallen React-Land!</h1>
                    <p>This once happy land has been overtaken by the Necromancer and turned into . . .</p>
                    <h1>REACT UNDERWORLD!</h1>
                    <p>Only by completing these advanced challenges can you return the balance of power to the forces of Good!</p>
                </div>
            </div>
            <div className="row center home-content">
                <div className="col-sm-4">
                    <div className="card">
                    <Link to="/jest-land" className="btn btn-dark"><img className="card-img-top" src={JestImage} alt="Jest Land"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">Jest Land</h5>
                            <p className="card-text">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</p>
                            <Link to="/jest-land" className="btn btn-dark">Jest Land</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <Link to="/state-land" className="btn btn-dark"><img className="card-img-top" src={StateImage} alt="State"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">State Land</h5>
                            <p className="card-text">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</p>
                            <Link to="/state-land" className="btn btn-dark">State Land</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <Link to="/audio-land" className="btn btn-dark"><img className="card-img-top" src={AudioImage} alt="Audio"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">Audio Land</h5>
                            <p className="card-text">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</p>
                            <Link to="/audio-land" className="btn btn-dark">Audio Land</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <Link to="/css-land" className="btn btn-dark"><img className="card-img-top" src={CSSImage} alt="CSS"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">CSS Land</h5>
                            <p className="card-text">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</p>
                            <Link to="/css-land" className="btn btn-dark">CSS Land</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <Link to="/authorization-land" className="btn btn-dark"><img className="card-img-top" src={AuthorizationImage} alt="Authorization"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">Authorization</h5>
                            <p className="card-text">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</p>
                            <Link to="/authorization-land" className="btn btn-dark">Authorization Land</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <Link to="/api-land" className="btn btn-dark"><img className="card-img-top" src={APIImage} alt="API"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">API Land</h5>
                            <p className="card-text">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</p>
                            <Link to="/api-land" className="btn btn-dark">API Land</Link>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Home;