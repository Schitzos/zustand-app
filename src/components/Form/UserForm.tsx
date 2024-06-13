'use client'
import { usePersistStore } from '@/store/persist-store';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
};

export default function UserForm() {
    console.log('render form')
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const setFirstName = usePersistStore((state) => state.setFirstName)
  const setLastName = usePersistStore((state) => state.setLastName)

  const onSubmit: SubmitHandler<FormValues> = data => {
    setFirstName(data.firstName)
    setLastName(data.lastName)
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Simple Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            id="firstName"
            {...register('firstName', { required: 'First name is required' })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            id="lastName"
            {...register('lastName', { required: 'Last name is required' })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
