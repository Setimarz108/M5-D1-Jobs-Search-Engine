export const DEL_FROM_FAVORITES = 'DEL_FROM_FAVORITES'
export const ADD_TO_FAVS = 'ADD_TO_FAVS'
export const FETCH_JOBS = 'FETCH_JOBS'

export const addToFavs = (job) => ({

    type:ADD_TO_FAVS,
    payload: job,
})
export const deleteFromFavorites = (index) => ({
    type: DEL_FROM_FAVORITES,
    payload: index,
  })


  export const fetchJobsAction = () => async (dispatch) => {

        try {
            let response = await fetch(
              `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`
            );
            console.log("response", response);
            if (response.ok) {
              let jobs = await response.json();
              dispatch({
                  type: FETCH_JOBS,
                  payload: jobs
              })
              console.log("myData", jobs);
            } else {
              console.log("something went wrong");
            }
          } catch (error) {
            console.log(error);
          }
        };
      
       
    
     
  