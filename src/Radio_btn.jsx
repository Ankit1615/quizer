import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Alert from './Alert';
import firebase from './firebase';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    button: {
      margin: theme.spacing(1, 0, 2, 0),     
    },
  }));

function Radio_btn({set}) {
    const [value, setValue] = useState(''); 
    const [data , setData] = useState();
    const [loading,setLoading] = useState(false);
    const classes = useStyles();

    useEffect(() => {
      const quiz = firebase.database().ref('quizer').orderByKey().equalTo(set);
      quiz.on('value',(snapshort) => {
        const datas = snapshort.val();
        const dataList = [];
        for(let id in datas){
          dataList.push(datas[id]);
        }
        
  
       dataList.map( (data)=> {
        const dataL = [];
        for(let idd in data){
          dataL.push(data[idd]);
        }
       
        setData(dataL)
       } );
       setLoading(true)
      })
       
      
    }, [])
  
//    
    return (
       <>
        {loading ? (data ?   data.map((p,key) => (
                     <div key={key}>     
                                                     
               <Typography variant="subtitle1" spacing="3" gutterBottom > 
                 <div style={{whiteSpace : 'pre-line'}}>
               Q.{key+1}  {p.question.replace('<br>','')}
               </div>
               <form onSubmit={(event) => { 
                 event.preventDefault();                              
                   }}>
                 <FormControl component="fieldset"  className={classes.formControl} key={key}>                          
                   <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={
                     (event) => {
                       setValue(event.target.value);                                                                
                     }
                   }>
                     <FormControlLabel value={p.optionA} control={<Radio color="primary" />} label={p.optionA} />
                     <FormControlLabel value={p.optionB} control={<Radio color="primary" />} label={p.optionB} />
                     <FormControlLabel value={p.optionC} control={<Radio color="primary" />} label={p.optionC} />
                     <FormControlLabel value={p.optionD} control={<Radio color="primary" />} label={p.optionD} />                            
                     <FormControlLabel style={{display:'none'}} value={p.correctANS} control={<Radio color="primary" />} label={p.correctANS} />                            
                   </RadioGroup>                                                       
                   <Alert  check= {
                    p.correctANS === value  ? 'success' : value === '' ? 'info': 'error'
                   } correct = {p.correctANS}/>
                 </FormControl>
               </form>
               </Typography>
            
             </div>         
                      )) : '') : <CircularProgress style={{position: 'absolute',
                        top: '50%',
                        left: '55%',
                        
                       
         
      }} />} 
       </>
    )
}

export default Radio_btn
