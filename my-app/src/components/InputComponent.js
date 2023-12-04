import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/InputComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const InputComponent = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a82hsqh', 'template_kn6jhlw', form.current, 'eUaDdbmPqEWY1xGVc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form className='all_input' ref={form} onSubmit={sendEmail}>

            <label>Nom </label>
            <div className='input_name'>
                <input type="text" name="user_name" placeholder='Entrer votre Nom Prenom/Entreprise' />
            </div>

            {/*<div className='input_mail_and_number'>*/}

            <label>Email 📫</label>
            <div className='input_email'>
                <input type="email" name="user_email" placeholder='Entrer votre Email' />
            </div>

            <label>Numéro de téléphone 📱</label>
            <div className='input_number'>
                <input className='input_phone' type="phone" name="user_phone" placeholder='Entrer votre numéro de téléphone' />
            </div>

            {/*</div>*/}

            <label>Message 📄</label>
            <div className='input_message'>

                <textarea name="message" placeholder='Entrer votre message' />

            </div>

            <button type="submit" value="Send">Envoyer</button>

        </form>
    );

};
export default InputComponent;