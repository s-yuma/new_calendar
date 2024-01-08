'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, Schema } from './schema';

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data:any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-3'>
      <input {...register('password')} type="password" className='border w-32' placeholder='パスワード'/>
      {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

      <input {...register('confirmPassword')} type="password" className='border w-32' placeholder='確認用パスワード'/>
      {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
<div>
      <input {...register('checkbox')} type="checkbox" value="1"/>選択肢１
      <input {...register('checkbox')} type="checkbox" value="2"/>選択肢２
      {errors.checkbox && <p className='text-red-500'>チェックボックスは必須です</p>}
      </div>
      <div>
      <select {...register('listBox')}>
        <option value="">選択してください</option>
        <option value="sample1">サンプル１</option>
        <option value="sample2">サンプル２</option>
        <option value="sample3">サンプル３</option>
      </select>
      </div>
      {errors.listBox && <p className='text-red-500'>{errors.listBox.message}</p>}

      <button type="submit" className='bg-blue-300 w-32'>送信</button>
    </form>
  );
};

export default MyForm


