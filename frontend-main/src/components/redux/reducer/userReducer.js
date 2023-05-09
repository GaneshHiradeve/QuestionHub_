import { createReducer } from '@reduxjs/toolkit';

export const server = 'http://localhost:8000';

export const userReducer = createReducer(
  {},
  {
    userloginRequest: state => {
      state.loading = true;
    },
    userloginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    userloginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    

    

    getuserprofile: state => {
      state.loading = true;
    },
    getuserprofileSuccess: (state, action) => {
      state.loading = false;
      // state.isAuthenticated = true;
      state.user = action.payload;
    },
    getuserprofileFail: (state, action) => {
      state.loading = false;
      // state.isAuthenticated = false;
      state.error = action.payload;
    },

    logoutuser: state => {
      state.loading = true;
    },

    logoutuserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload.message;
    },
    logoutuserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    

    userRegisterRequest: state => {
      state.loading = true;
    },
    userRegisterSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    userRegisterFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },


    usercreatepostRequest: state => {
      state.loading = true;
    },
    usercreatepostSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.postdata = action.payload.post;

      state.message = action.payload.message;
    },
    usercreatepostFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },


    
    usergetallpostRequest: state => {
      state.loading = true;
    },
    usergetallpostSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.allData = action.payload.allData;
      
    },
    usergetallpostFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      
    },



    userpostRequest: state => {
      state.loading = true;
    },
    userpostRequestSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.userpost = action.payload.userpost;
      
      
    },
    userpostRequestFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      
    },







    
    alluserdataRequest: state => {
      state.loading = true;
    },
    alluserdataSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    alluserdataFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },


    usercommentRequest: state => {
      state.loading = true;
    },
    usercommentSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    usercommentFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },


    
    
    getcategoryRequest: state => {
      state.loading = true;
    },
    getcategorySuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.categorydata = action.payload.categorydata;
      
      
      
    },
    getcategoryFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      
    },

    // questionid
    // /report/  
    getlikeRequest: state => {
      state.loading = true;
    },
    getlikeSuccess: (state, action) => {
      state.loading = false;
      state.like1 = action.payload.like1;
      state.totallength = action.payload.totallength;
      state.message=action.payload.message
      
    },
    getlikeFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;

    },


    getreportRequest: state => {
      state.loading = true;
    },
    getreportSuccess: (state, action) => {
      state.loading = false;
      state.report = action.payload.like1;
      state.reportlength = action.payload.totallength;
      state.message=action.payload.message
      
    },
    getreportFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;

    },

    deletepostRequest: state => {
      state.loading = true;
    },
    deletepostSuccess: (state, action) => {
      state.loading = false;
     
      state.message=action.payload.message
      
    },
    deletepostFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;

    },



    cleanError: state => {
      state.error = null;
    },

    cleanMessage: state => {
      state.message = null;
    },
  }
);

