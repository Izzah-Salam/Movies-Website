

// Function to fetch data from the API

async function FetchingData(page){
    try {         
        document.getElementById("PreLoader").style.display = "block";
        const resolve = await fetch(`https://movieto-api.vercel.app/movie/all?page=${page}`)
        const data = await resolve.json() 
        console.log(data);
        moviesRender(data)

   
        
    } catch (error) {
        console.log('Fetching Error',error)
        throw error
        
    }
    

}
// shoing fatching data in laptop scree

function moviesRender(data){
    document.getElementById("PreLoader").style.display = "none";
    let container = ''
    data.map((value)=>{

        container+=` <div class="card">
                    <div class="card-img">
                    <a href="./image-description.html"> <img src="${value.img_url}"></a>
                    <button class="card-btn">+</button>
                </div>
                    <div class="img-des">${value.name}</div>
               </div>  
        `
    })

    document.querySelector(".cards-container").innerHTML = container
}


// loader 

window.onload =  async function(){
    try {
        document.getElementById("PreLoader").style.display = "block";
        const initialPage = 1;
        const data = await FetchingData(initialPage);
        document.getElementById("PreLoader").style.display = "none";
        
    } catch (error) {
        console.error('Error during initial data fetch:', error);
        document.getElementById("PreLoader").style.display = "none";
        
    }
    
}

// pagination 

function pageValue(callback) {
    const btns = document.querySelectorAll(".carousel-slide");
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            const value = btn.textContent; // Get the value from button click
            callback(value); // Call the callback with the value
        });
    });
}

pageValue(value=>{
    
        FetchingData(value)
    })


// image - description 



