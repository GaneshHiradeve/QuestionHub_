import { server } from "../reducer/userReducer";
import axios from "axios";

export const CreatePost = (description,categories) => async dispatch => {
    try {
      dispatch({ type: 'usercreatepostRequest' });
  
      const { data } = await axios.post(
        `${server}/createpost`,
        {
            description,categories
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
  
      dispatch({ type: 'usercreatepostSuccess', payload: data });
    } catch (err) {
      dispatch({ type: 'usercreatepostFail', payload: err.response.data.message });
    }
  };


  // userpostRequest
  export const getallPost = () => async dispatch => {
    try {
      dispatch({ type: 'usergetallpostRequest' });
  
      const { data } = await axios.get(
        `${server}/alluserpostdata`,
       
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
  
      dispatch({ type: 'usergetallpostSuccess', payload: data });
    } catch (err) {
      dispatch({ type: 'usergetallpostFail', payload: err.response.data.message });
    }
  };



  export const getuserPost = () => async dispatch => {
    try {
      dispatch({ type: 'userpostRequest' });
  
      const { data } = await axios.get(
        `${server}/getallpost`,
       
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      dispatch({ type: 'userpostRequestSuccess', payload: data });
    } catch (err) {
      dispatch({ type: 'userpostRequestFail', payload: err.response.data.message });
    }
  };


  export const getpostCategory = (category) => async dispatch => {
    try {
      dispatch({ type: 'getcategoryRequest' });
    
      const { data } = await axios.get(
        `${server}/user/${category}`,
       
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      dispatch({ type: 'getcategorySuccess', payload: data });
    } catch (err) {
      dispatch({ type: 'getcategoryFail', payload: err.response.data.message });
    }
  };




  export const getpostLike = (id) => async dispatch => {
    try {
     
      dispatch({ type:'getlikeRequest'});
     
      const { data } = await axios.get(
        `${server}/like/${id}`,
           
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
    
      dispatch({ type:'getlikeSuccess', payload: data });
    } catch (err) {
      
      dispatch({ type:'getlikeFail', payload: err.response.data.message });
    }
  };


  export const getpostReport = (id) => async dispatch => {
    try {
     
      dispatch({ type:'getreportRequest'});
     
      const { data } = await axios.get(
        `${server}/report/${id}`,
           
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
    
      dispatch({ type:'getreportSuccess', payload: data });
    } catch (err) {
      
      dispatch({ type:'getreportFail', payload: err.response.data.message });
    }
  };

  // deletepostRequest


  export const deleteuserPost=(id)=>async(dispatch)=>{
     
    try{
             dispatch({type:'deletepostRequest'});
  
             const {data}=await axios.delete(`${server}/deletepost/${id}`,{
                 headers:{
                        "Content-Type":"application/json",
                 },
                 withCredentials:true,
             })
          dispatch({type:'deletepostSuccess',payload:data})
    }catch(err){
     dispatch({type:'deletepostFail',payload:err.response.data.message})
  
    }
  }