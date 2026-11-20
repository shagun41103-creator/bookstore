import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/signup`, userInfo);
      console.log(res.data);
      console.log(res.data);

      if (res.data) {
        alert('Signup successfully');
      }

      localStorage.setItem('Users', JSON.stringify(res.data));
    } catch (err) {
      if (err.response) {
        alert('Error: ' + err.response.data.message);
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl shadow-slate-950/40">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-800">Signup</h3>
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost text-slate-500 hover:bg-slate-100"
          >
            ✕
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              {...register('fullname', { required: true })}
            />
            {errors.fullname && (
              <span className="mt-1 block text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="mt-1 block text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="mt-1 block text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-pink-500 px-3 py-2 font-medium text-white transition hover:bg-pink-600"
          >
            Signup
          </button>

          <p className="text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/" className="font-medium text-blue-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;