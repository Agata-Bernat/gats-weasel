import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../componenets/Style.css';
import Nav from "../componenets/Nav"




function workshops() {
    return (
        <>
            <Nav />
            <div className="container-workshop">


                <div className="card" >
                    <StaticImage className="img-workshops"
                        alt="workshps 1"
                        src="../images/Logos/mindchase_Logo komplett transparent.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>title1</h2>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make.</p>
                    </div>
                    <a href="#" class="card-link">read more</a>

                </div>

                <div className="card" >
                    <StaticImage className="img-work"
                        alt="workshps 1"
                        src="../images/Logos/mindchase-symbol-big.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>title 2</h2>

                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card'sSome quick .</p><a href="#" class="card-link">read more</a>
                    </div>


                </div>






                <div className="card" >
                    <StaticImage className="img-work"
                        alt="workshps 1"
                        src="../images/Logos/mindchase-logo-transparent.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>title 3</h2>

                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make.</p>
                    </div>
                    <a href="#" class="card-link">read more</a>
                </div>



                <div className="card" >
                    <StaticImage className="img-work"
                        alt="workshps 1"
                        src="../images/Logos/mindchase-logo-transparent.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>title 4</h2>

                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make.</p>
                    </div>
                    <a href="#" class="card-link">read more</a>
                </div>




                <div className="card" >
                    <StaticImage className="img-work"
                        alt="workshps 1"
                        src="../images/Logos/mindchase-logo-transparent.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>title 5</h2>

                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make.</p>
                    </div>
                    <a href="#" class="card-link">read more</a>
                </div>



                <div className="card" >
                    <StaticImage className="img-work"
                        alt="workshps 1"
                        src="../images/Logos/mindchase-logo-transparent.png"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                    <h2>title 6</h2>

                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make up the bulk of the card'sSome quick example text to build on the card title and make.</p>
                    </div>
                    <a href="#" class="card-link">read more</a>
                </div>


            </div >


        </>
    )
}

export default workshops



