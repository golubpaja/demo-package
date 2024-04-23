import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import MUIButton, { CommonProps } from './MUIButton';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';


const sizes =  ['lg', 'md', 'sm'];
const color = ['inherit' , 'primary' , 'secondary' , 'success' , 'error' , 'info' , 'warning']

const meta: Meta = {
  title: 'Components/IconButton',
  component: MUIButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onFocus: { action: 'focused' },
    size: {
      option: sizes,
    },
    color: {
      option: color,
    },
    startIcon: {
      control: { type: 'boolean' },
      mapping: { false: '', true: <BlockOutlinedIcon/> },
    },
    endIcon: {
      control: { type: 'boolean' },
      mapping: { false: '', true: <BlockOutlinedIcon/> },
    },
  },
  args: { onClick: fn(), onFocus: fn() },
};



// const IconComp:React.ReactNode =  (
//   <svg xmlns="http://www.w3.org/2000/svg" height="13px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
//   </svg>
// )



export default meta;

export const Button = (args: CommonProps) => (
  <MUIButton {...args}>
    {args.children}
  </MUIButton>
);
Button.args = {
  children:'Example Button',
  variant: 'contained',
  color: 'primary',
  startIcon:false,
  endIcon:true,
};