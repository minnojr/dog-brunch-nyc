import { locations } from "../utils/data";
import { throttle } from 'throttle-debounce';

export const RECEIVE_LOCATION = 'RECEIVE_LOCATIONS';

// componentDidMount() {
//     this.callAPI()
// }
//
// // To DO:
// // Set this up to be called when app first starts, then put data in the store (have to set up store still)
//
// callAPI = () => {
//     fetch(`http://localhost:9000/testAPI/${this.props.location.name}`)
//         .then(res => res.json())
//         .then(res => {
//             // res.name ? console.log(res.name) : console.log(res.message)
//             console.log(res.name)
//         });
// };

export function receiveLocation(location) {
    return {
        type: RECEIVE_LOCATION,
        location
    }
}

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function parseJSON(response) {
    return response.json();
}


export function handleReceiveLocations() {
    return async (dispatch) => {

        // const response =  fetch('https://api.com/values/1');
        // const json = await response.json();
        // console.log(json);

        // Promise.all(locations.map(async (l) => {
        //         return fetch(`http://localhost:9000/testAPI/${l.name}`)
        //             .then(checkStatus)
        //             .then(parseJSON)
        //     }
        // )).then(data => {
        //         console.log(data);
        //     })


        let results = [];
        for (const l of locations) {
            console.log(`Loading ${results.length+1}/${locations.length}`);
            // Bad: each loop iteration is delayed until the entire asynchronous operation completes
            results.push(
                await new Promise((resolve, reject) => {
                    return resolve(fetch(`http://localhost:9000/testAPI/${l.name}`))
                })
            );
        }


         Promise.all(results)
            .then(data => {
               data.map(d => d.json()
                   .then(p => dispatch(receiveLocation(p))));
            });

        // const promises = locations.map((l) => {
        //     return new Promise((resolve, reject) => {
        //             return resolve(fetch(`http://localhost:9000/testAPI/${l.name}`))
        //         // });
        //     });
        // });
        //
        // Promise.all(promises)
        //     .then(data => {
        //         console.log("in2")
        //        data.map(d => d.json()
        //            .then(p => dispatch(receiveLocation(p))));
        //     });

        // Promise.all(locations.map(l => {
        //         fetch(`http://localhost:9000/testAPI/${l.name}`)
        //             .then(checkStatus)
        //             .then(parseJSON)
        // }))
        //     .then(data => {
        //         console.log(data);
        //     })

        //
        //
        //
        // // console.log(promises);
        // const location = []
        //
        // Promise.all(promises).then((ps) => {
        //     ps.map(p => console.log(p.json()))
        // });
        // promises.map((p) => {
        //     p.then(a => a.json()
        //         .then(q => location.push(q)))
        //         // .then(dispatch(receiveLocations(location)));
        //         .then(r => console.log(location))
        // });


        //
        // fetch(`http://localhost:9000/testAPI/${this.props.location.name}`)
        // .then(res => res.json())
        // .then(res => {
        //     // res.name ? console.log(res.name) : console.log(res.message)
        //     console.log(res.name)
        // });
    }
}