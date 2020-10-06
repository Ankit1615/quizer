// import React,{useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Typography from '@material-ui/core/Typography';
// import Alert from './Alert';
// import c from './Default.json';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },

//     button: {
//       margin: theme.spacing(1, 0, 2, 0),     
//     },
//   }));

// function Radio_btn({data,sets}) {
//     const [value, setValue] = useState(''); 
//     // const data= localStorage.getItem('data')
//     // const set = localStorage.getItem('set')
//     // const [val, setVal] = useState(set);  
   
//     const classes = useStyles();
// //     let map = new Map();
// // map.set('set1', set);

// // let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// // done!
// // obj = { banana: 1, orange: 2, meat: 4 }
// console.log(data)
// var valu
// switch (sets){
//     case 'set1' : 
//     valu = data.set1
//     break;
//     case 'set2' : 
//     valu = data.set2
//     break;
//     case 'set3' : 
//     valu = data.set3
//     break;
//     case 'set4' : 
//     valu = data.set4
//     break;
//     case 'set4' : 
//     valu = data.set4
//     break;
//     case 'set6' : 
//     valu = data.set6
//     break;
//     case 'set7' : 
//     valu = data.set7
//     break;
//     case 'set8' : 
//     valu = data.set8
//     break;
//     case 'set9' : 
//     valu = data.set9
//     break;
//     case 'set1' : 
//     valu = data.set10
//     break;
//     case 'set1' : 
//     valu = data.set11
//     break;
//     case 'set1' : 
//     valu = data.set12
//     break;
//     case 'set1' : 
//     valu = data.set13
//     break;
//     case 'set1' : 
//     valu = data.set14
//     break;
//     case 'set1' : 
//     valu = data.set15
//     break;
//     case 'set1' : 
//     valu = data.set16
//     break;
//     case 'set1' : 
//     valu = data.set17
//     break;
//     case 'set1' : 
//     valu = data.set18
//     break;
//     case 'set1' : 
//     valu = data.set19
//     break;
//     case 'set2' : 
//     valu = data.set20
//     break;
//     case 'set2' : 
//     valu = data.set21
//     break;
//     case 'set2' : 
//     valu = data.set22
//     break;
//     case 'set2' : 
//     valu = data.set23
//     break;
//     case 'set2' : 
//     valu = data.set24
//     break;
//     case 'set2' : 
//     valu = data.set25
//     break;
    
//     }

//     return (
//         <>                  
//         { c.set2.map((p,key) => (
//                      <div key={key}>                                                   
//                         <Typography variant="subtitle1" spacing="3" gutterBottom>
//                         Q.{key+1}  {p.question}
//                         <form onSubmit={(event) => { 
//                           event.preventDefault();                              
//                             }}>
//                           <FormControl component="fieldset"  className={classes.formControl}>                          
//                             <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={
//                               (event) => {
//                                 setValue(event.target.value);                                                                
//                               }
//                             }>
//                               <FormControlLabel value={p.optionA} control={<Radio color="primary" />} label={p.optionA} />
//                               <FormControlLabel value={p.optionB} control={<Radio color="primary" />} label={p.optionB} />
//                               <FormControlLabel value={p.optionC} control={<Radio color="primary" />} label={p.optionC} />
//                               <FormControlLabel value={p.optionD} control={<Radio color="primary" />} label={p.optionD} />                            
//                               <FormControlLabel style={{display:'none'}} value={p.correctANS} control={<Radio color="primary" />} label={p.correctANS} />                            
//                             </RadioGroup>                                                       
//                             <Alert  check= {
//                              p.correctANS === value  ? 'success' : value === '' ? 'info': 'error'
//                             } correct = {p.correctANS}/>
//                           </FormControl>
//                         </form>
//                         </Typography>
                     
                        
//                       </div>         
               
//         ))}
               
//         </>      
       
        
//     )
// }

// export default Radio_btn
