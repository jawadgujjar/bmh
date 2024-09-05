import React from 'react'
import "./proposalform.css";

function Proposalform() {
    return (
        <div >
            <div>
                <p className='get-proposal-text'>Get My <span className='free-text'>FREE Digital Marketing Proposal</span>
                </p>
            </div>
            <div className='center-proposalform'>
                <div className="contact-container-poposal">
                    <form className="contact-form" action="#" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Proposalform