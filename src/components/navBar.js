


const Navbar =()=>{



    return (
        <>
         {/* <!-- Responsive navbar--> */}
         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
         <div class="container px-lg-5">
             <a class="navbar-brand" href="#!">Events Booking</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                     <li class="nav-item"><a class="nav-link" href="#!">Booking System</a></li>
                     <li class="nav-item"><a class="nav-link" href="#!">Pricing</a></li>
                     <li class="nav-item"><a class="nav-link" href="#!">Events</a></li>
                     <li class="nav-item"><a class="nav-link" href="#!">Login</a></li>
                 </ul>
             </div>
         </div>
     </nav>
     </>
    )

}
export default Navbar
