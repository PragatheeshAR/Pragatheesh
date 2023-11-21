import { Autocomplete, TextField } from "@mui/material";
import { useState } from 'react';
export default function Styles() {
    const list=["apple","orange","pineapple"]
    const [val,setVal]=useState<string|null>(null)
    console.log({val})
    // const PinkSwitch = styled(Switch)(({ theme }) => ({
    //     '& .MuiSwitch-switchBase.Mui-checked': {
    //       color: pink[600],
    //       '&:hover': {
    //         backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    //       },
    //     },
    //     '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    //       backgroundColor: pink[600],
    //     },
    //   }));
  return (
    <div>
      {/* <Typography variant="subtitle1">Hello</Typography>
      <Typography variant="subtitle2">Hello</Typography>
      <Button variant="text">hello</Button>
<Button variant="contained">Welcome</Button>
<Button variant="outlined">Goodbye</Button>
<Slider
  size="small"
  defaultValue={70}
  aria-label="Small"
  valueLabelDisplay="auto"
/>
<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
<Switch {...list} defaultChecked />
<Switch {...list} defaultChecked color="secondary" />
<Switch {...list} defaultChecked color="warning" />
<Switch {...list} defaultChecked color="default" />
<PinkSwitch {...list} defaultChecked />
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box> */}
    <br/>
    <Autocomplete options={list} renderInput={temp=><TextField {...temp} label="Fruits"/>}
    value={val}
    onChange={(event:any,newValue:string|null)=>setVal(newValue)}
    freeSolo/>
    </div>
  )
}
