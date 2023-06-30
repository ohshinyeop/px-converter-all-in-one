import styled from '@emotion/styled';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Input,
  InputLabel,
  Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

export default function mainView() {
  const [px, setPx] = useState(16);
  const [pxTwo, setPxTwo] = useState(1);
  const [rootWidth, setRootWidth] = useState(1920);
  const [rootHeight, setRootHeight] = useState(1080);
  const [rootpx, setRootpx] = useState(16);
  const [pxThree, setPxThree] = useState(1);

  const rootpxChange = (e: any) => {
    setRootpx(e.currentTarget.value);
  };
  const rootWidthChange = (e: any) => {
    setRootWidth(e.currentTarget.value);
  };
  const rootHeightChange = (e: any) => {
    setRootHeight(e.currentTarget.value);
  };

  const calcRem = (e: any) => {
    setPx(e.currentTarget.value);
  };
  const calcVw = (e: any) => {
    setPxTwo(e.currentTarget.value);
  };
  const calcVh = (e: any) => {
    setPxThree(e.currentTarget.value);
  };

  const CardContentStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  };

  return (
    <>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        textAlign={'center'}
        pb={3}
      >
        px to rem, vw, vh
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '5vw',
        }}
      >
        <Card>
          <CardHeader title={'px to rem'}></CardHeader>
          <CardContent
            sx={{
              ...CardContentStyles,
            }}
          >
            <InputLabel>root px</InputLabel>
            <Input onChange={rootpxChange} value={rootpx}></Input>
            <InputLabel>px</InputLabel>
            <Input id="px" onChange={calcRem} value={px}></Input>
            <InputLabel>rem</InputLabel>
            <Input value={px / rootpx}></Input>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title={'px to vw'}></CardHeader>
          <CardContent
            sx={{
              ...CardContentStyles,
            }}
          >
            <InputLabel>root width</InputLabel>
            <Input onChange={rootWidthChange} value={rootWidth}></Input>
            <InputLabel>px</InputLabel>
            <Input id="px" onChange={calcVw} value={pxTwo}></Input>
            <InputLabel>vw</InputLabel>
            <Input value={(pxTwo / rootWidth) * 100}></Input>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title={'px to vh'}></CardHeader>
          <CardContent
            sx={{
              ...CardContentStyles,
            }}
          >
            <InputLabel>root height</InputLabel>
            <Input onChange={rootHeightChange} value={rootHeight}></Input>
            <InputLabel>px</InputLabel>
            <Input id="px" onChange={calcVh} value={pxThree}></Input>
            <InputLabel>vh</InputLabel>
            <Input value={(pxThree / rootHeight) * 100}></Input>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
