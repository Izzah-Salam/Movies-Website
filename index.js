const url = 'https://movieto-api.vercel.app/movie/all?page=1'

// Function to fetch data from the API


async function FetchingData(){
    try {
        const resolve = await fetch(url)
        const data = await resolve.json()
        moviesRender(data)
        
    } catch (error) {
        console.log('Fetching Error',error)
        throw error
        
    }
    

}

function moviesRender(data){
    let container = ''
    data.map((value)=>{

        container+=` <div class="card">
                    <div class="card-img">
                        <img src="${value.img_url}">
                    <button class="card-btn">+</button>
                </div>
                    <div class="img-des">${value.name}</div>
               </div>  
        `


    })

    document.querySelector(".cards-container").innerHTML = container
}
window.onload = FetchingData