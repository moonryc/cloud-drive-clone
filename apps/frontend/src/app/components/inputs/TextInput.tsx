import React from 'react';
import {TextInputProps} from "@mantine/core";

type CustomTextInputProps = TextInputProps

const TextInput:React.FC<CustomTextInputProps> = ({...props}) => {
  return <TextInput {...props}/>;
};

export default TextInput;
