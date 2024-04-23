import React from "react";
import { ButtonProps } from "@mui/material/Button";
import styled from "styled-components";
import Button from "@mui/material/Button";

// import { useTheme2 } from '../../themes';
// import { getFocusStyles, getMouseFocusStyles } from '../../themes/mixins';
// import { ComponentSize } from '../../types';
// import { IconName } from '../../types/icon';
// import { getPropertiesForButtonSize } from '../Forms/commonStyles';
// import { Icon } from '../Icon/Icon';
// import { PopoverContent, Tooltip, TooltipPlacement } from '../Tooltip';

//export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'success' | 'warning';
//export const allButtonVariants: ButtonVariant[] = ['primary', 'secondary', 'destructive', 'warning'];

//export type ButtonFill = 'solid' | 'outline' | 'text';
//export const allButtonFills: ButtonFill[] = ['solid', 'outline', 'text'];

export type ButtonColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";
export const allButtonColors: ButtonColor[] = [
  "inherit",
  "primary",
  "secondary",
  "success",
  "error",
  "info",
  "warning",
];
//could be global Component size
export type ButtonSize = "small" | "medium" | "large";
export const allButtonSizes: ButtonSize[] = ["small", "medium", "large"];

export type ButtonVariant = "text" | "outlined" | "contained";
export const allButtonVariants: ButtonVariant[] = [
  "text",
  "outlined",
  "contained",
];

export interface CommonProps extends ButtonProps {
  color?: ButtonColor;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: ButtonSize;
  startIcon?: React.ReactNode;
  variant?: ButtonVariant;
}

// Styled component for the button with custom focus state styles
const ButtonStyled = styled(Button)`
  && {
    text-transform: theme.dark;.averhelt.--button-linehight;
    line-height: 20px;
    font-weight: 600;
    border-radius: 4px;
    border: 1px solid #346b69;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    gap: 8px;
    text-align: left;
    font-size: 14px;
    color: #fff;
    font-family: "IBM Plex Sans";
    letter-spacing: unset;

    .MuiButton-icon {
      margin: 0;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
  }
`;

const MUIButton: React.FC<CommonProps> = (props) => {
  return (
    <ButtonStyled {...props}>
      {/* //{startIcon && <div>{startIcon}</div>} */}
      {props.children}
      {/* {endIcon && <div>{endi}</div>} */}
    </ButtonStyled>
  );
};

export default MUIButton;
