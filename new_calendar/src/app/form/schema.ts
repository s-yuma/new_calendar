import { z } from 'zod';

export const schema = z.object({
  password: z.string().min(1, {message: 'パスワードは必須です'}),
  confirmPassword: z.string().min(1, {message: '確認用パスワードは必須です'}),
  checkbox: z.array(z.string()).nonempty('チェックボックスは必須です'),
  listBox: z.string().refine(value => value !== '' && value !== '選択してください', {
    message: 'リストボックスは必須です',
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: 'パスワードと確認用パスワードが一致しません',
  path: ['confirmPassword'], // エラーを表示するフィールドを指定
});

export type Schema = z.infer<typeof schema>;

