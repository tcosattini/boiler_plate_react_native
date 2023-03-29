import { useState } from "react";

interface Props {
  initialState?: {};
}

export const useForm = ({ initialState }: Props) => {
  const [formState, setFormState] = useState({ initialState });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (
    e: React.ChangeEvent<HTMLInputElement>,
    onSubmit: (formState: {}) => void
  ) => {
    e.preventDefault();
    onSubmit(formState);
  };
  console.log(formState);
  return { setFormState, handleSubmit };
};
