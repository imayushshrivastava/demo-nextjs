"use client"
import React, { useEffect, useState } from "react";
import { ContactUsForm } from "../modals/contact-us";
import axios from "axios";

const RequestQuote = ()=>{
    const initialFormData = {
        name: '', 
        email: '',
        message: '',
        service: ''
    };
    const [formData, setFormData] = useState(initialFormData);

    const [errors, setErrors] = useState<ContactUsForm>({});
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Email validation
        if (name === 'email') {
            const isValidEmail = /\S+@\S+\.\S+/.test(value);
            setErrors({ ...errors, [name]: isValidEmail ? '' : 'Please enter a valid email address' });
        }
      };
    
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                service: e.target.service.value,
                message: e.target.message.value
            };
            await axios.post('/api/request-quotes', formData);
            setFormData(initialFormData);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const [isDisabled, setIsDisabled] = useState(true);
    const isFormValid = () => {
        return Object.values(formData).every(value => value !== '') && Object.values(errors).every(value => value === '');
    };
    useEffect(() => {
        setIsDisabled(!isFormValid());
    }, [formData, errors]);
    
    const handleSelectChange = (event:any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value }); // Update formData with selected service value
      };
    
    
    return(
        <>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                        <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
                    </div>
                    <div className="row gx-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                        </div>
                    </div>
                    <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                    <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px',height: '60px'}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">+012 345 6789</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-xl-12">
                                    <input type="text" className="form-control bg-light border-0"  
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange} 
                                        placeholder="Your Name" 
                                        style={{height: '55px'}} 
                                    />
                                </div>
                                <div className="col-12">
                                    <input type="email" className="form-control bg-light border-0"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange} 
                                        placeholder="Your Email" 
                                        style={{height: '55px'}}
                                     />
                                     <div style={{ color: 'red' }}>{errors.email}</div>
                                </div>
                                <div className="col-12">
                                    <select 
                                        name="service"  
                                        value={formData.service} onChange={handleSelectChange}
                                        className="form-select bg-light border-0" style={{height: '55px'}}>
                                        <option value=''>Select A Service</option>
                                        <option value="Service 1">Service 1</option>
                                        <option value="Service 2">Service 2</option>
                                        <option value="Service 3">Service 3</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0" 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange} 
                                        rows={3} 
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                                <div className="col-12">
                                    <button disabled={isDisabled} className="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default RequestQuote