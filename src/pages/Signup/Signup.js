import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (data) => {

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                handleUpdateUserProfile(data.name);
                alert('user sign in successfully');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => setError(error))
    }





    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 shadow-xl bg-slate-300 rounded p-7'>
                <h2 className='text-xl text-center text-primary'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="w-full max-w-xs form-control">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "name is required"
                        })} className="w-full max-w-xs input input-bordered" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "email is required"
                        })} className="w-full max-w-xs input input-bordered" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: "password must be 6 or longer" },
                            // pattern: { value: /(?=.*[*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong' }
                        })} className="w-full max-w-xs input input-bordered" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='w-full mt-4 btn btn-accent' value="Sign Up" type="submit" />
                    <div>
                        {error && <p className='text-red-600'>{error}</p>}
                    </div>
                </form>
                <p>Already have an account?<Link className='text-primary' to='/login'>Please login</Link></p>

            </div>
        </div>
    );
};

export default Signup;