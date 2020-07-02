import React from 'react';
import { CustomButtonContainer } from 'Components/CustomButton/Button.styles';

const CustomButton = ({ children, ...props }) => <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;

export default CustomButton;
