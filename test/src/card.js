import React from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.css';


function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-1">
                        <h1><span className="badge badge-secondary"><i class="far fa-clock fa-1px"></i></span></h1>
                    </div>
                    <div className="col-1">
                        <span className="badge badge-secondary">{props.number6}</span>
                    </div>
                    <div className="col-1">
                        <span className="badge badge-secondary">{props.number5}</span>
                    </div>
                    <div className="col-1">
                        <span className="badge badge-secondary">{props.number4}</span>
                    </div>
                    <div className="col-1">
                        <span className="badge badge-secondary">{props.number3}</span>
                    </div>
                    <div className="col-1">
                        <span className="badge badge-secondary">{props.number2}</span>
                    </div>
                    <div className="col-1">
                        <span className="badge badge-secondary">{props.number1}</span>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    description: PropTypes.string
}