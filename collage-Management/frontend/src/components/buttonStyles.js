import styled from 'styled-components';
import { Button } from '@mui/material';

export const RedButton = styled(Button)`
  && {
    background-color: #f00;
    color: white;
    margin-left: 4px;
    &:hover {
      background-color:rgb(94, 9, 9);
      border-color:rgb(103, 242, 230);
      box-shadow: none;
    }
  }
`;

export const BlackButton = styled(Button)`
  && {
    background-color:rgb(10, 7, 7);
    color: white;
    margin-left: 4px;
    &:hover {
      background-color:rgb(65, 63, 63);
      border-color:rgb(9, 31, 63);
      box-shadow: none;
    }
  }
`;

export const DarkRedButton = styled(Button)`
  && {
    background-color:rgb(109, 145, 11);
    color: white;
    &:hover {
      background-color:rgb(49, 8, 77);
      border-color:rgb(78, 43, 99);
      box-shadow: none;
    }
  }
`;

export const BlueButton = styled(Button)`
  && {
    background-color:rgb(1, 3, 49);
    color: #fff;
    &:hover {
      background-color:rgb(14, 38, 161);
    }
  }
`;

export const PurpleButton = styled(Button)`
  && {
    background-color: #270843;
    color: #fff;
    &:hover {
      background-color: #3f1068;
    }
  }
`;

export const LightPurpleButton = styled(Button)`
  && {
    background-color:rgb(77, 7, 230);
    color: #fff;
    &:hover {
      background-color:rgb(172, 139, 201);
    }
  }
`;

export const GreenButton = styled(Button)`
  && {
    background-color:rgb(4, 35, 49);
    color: #fff;
    &:hover {
      background-color:rgb(51, 123, 165);
    }
  }
`;

export const BrownButton = styled(Button)`
  && {
    background-color:rgb(87, 25, 3);
    color: white;
    &:hover {
      background-color:rgb(56, 24, 2);
      border-color:rgb(78, 52, 33);
      box-shadow: none;
    }
  }
`;

export const IndigoButton = styled(Button)`
  && {
    background-color:rgb(43, 35, 199);
    color: white;
    &:hover {
      background-color: #534ea6;
      border-color:rgb(141, 130, 226);
      box-shadow: none;
    }
  }
`;
