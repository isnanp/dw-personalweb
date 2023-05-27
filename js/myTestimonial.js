// class Testimonial {
//     #quotes = "";
//     #image = "";
    
//     constructor(quotes, image) {
//         this.#quotes = quotes;
//         this.#image = image;
//     }

//     get quotes() {
//         return this.#quotes;
//     }

//     get image() {
//         return this.#image;
//     }

//     get author() {
//         throw new Error("getAuthor() is not implemented")
//     }

//     get testimonialHTML() {
//         return `<div class="testi-item" > <img class="testi-img" src="${this.image}" alt="person" >  
//         <p class="quote"> ${this.quotes}</p > 
//         <p class="author"> - ${this.author}</p> 
//         </div>`;
//     }
// }

// class AuthorTestimonial extends Testimonial { 
//     #author = "";

//     constructor(author, quotes, image) {
//         super(quotes, image);
//         this.#author = author;
//     }
//     get author() { 
//         return this.#author;
//     }
// }

// class CompanyTestimonial extends Testimonial {
//     #company = "";

//     constructor(company, quotes, image) {
//         super(quotes, image);
//         this.#company = company;
//     }

//     get author() {
//         return this.#company + " company";
//     }
// }

// const testimonial1 = new AuthorTestimonial(
//     "Lorem Ipsum",
//     "lorem Ipsum is simply dummy",
//     "assets/images/testi1.jpg",
// );

// const testimonial2 = new AuthorTestimonial(
//     "Lorem Ipsum",
//     "lorem Ipsum is simply dummy",
//     "assets/images/testi2.jpg",
// );

// const testimonial3 = new CompanyTestimonial(
//     "Lorem",
//     "lorem Ipsum is simply dummy",
//     "assets/images/testi3.jpg"
// );

// let testimonialdata = [testimonial1, testimonial2, testimonial3];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialdata.length; i++) {
//     testimonialHTML +=  testimonialdata[i].testimonialHTML;
// }

// document.getElementById("testi-container").innerHTML = testimonialHTML; 


const testimonialData = [
    {
        author : "Siti Smith",
        quotes : "Terbaek lah",
        image : "assets/images/testi1.jpg",
        rating : 5,
    },
    {
        author : "John Wick",
        quotes : "lumayan lah",
        image : "assets/images/testi2.jpg",
        rating : 4,
    },
    {
        author : "Joyo Lennon",
        quotes : "Agak stupid tapi dah lah",
        image : "assets/images/testi3.jpg",
        rating : 3,
    },
    {
        author : "Reyna White",
        quotes : "Nyesel, no repeat order",
        image : "assets/images/testi4.jpg",
        rating : 2,
    },
    {
        author : "Ayu Walker",
        quotes : "Goblok",
        image : "assets/images/testi5.jpg",
        rating : 1, 
    },
    {
        author : "Agus Shelby",
        quotes : "Jos Sangat",
        image : "assets/images/testi6.jpg",
        rating : 5, 
    }
]

function starMaker(rating) {

    if (rating === 1) {
        return `<i class="fa-solid fa-star"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></i>`;
    } else if (rating === 2) {
        return `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`;
    } else if (rating === 3) {
        return `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`;
    } else if (rating === 4) {
        return `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`;
    } else if ( rating == 5 ) {
        return `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`;
    }
}

function allTesti() {
    let testimonialHTML = "";

    testimonialData.forEach(function(item) {
        testimonialHTML += `<div class="testi-item" > 
        <img class="testi-img" src="${item.image}" alt="person">  
        <p class="quote"> ${item.quotes}</p> 
        <p class="author"> - ${item.author}</p> 
         <p class="rating"> ${starMaker(item.rating)}</i></p>
        </div>`; 
    });

    document.getElementById("testi-container").innerHTML = testimonialHTML
}

allTesti()

function filterTesti(rating) {
    let testimonialHTML = "";

    let testiFiltered = testimonialData.filter(function (item) {
        return item.rating === rating;
    });

    if (testiFiltered.length === 0) {
        testimonialHTML += `<h2 style="text-allign:center">404 Data Not Found</h2>`
    } else { testiFiltered.forEach(function(item) {
        testimonialHTML += `<div class="testi-item" > 
                                    <img class="testi-img" src="${item.image}" alt="person">  
                                    <p class="quote"> ${item.quotes}</p> 
                                    <p class="author"> - ${item.author}</p> 
                                    <p class="rating"> ${starMaker(item.rating)}</i></p>
                            </div>`;
        });
    } 

    document.getElementById("testi-container").innerHTML = testimonialHTML;
}

                         