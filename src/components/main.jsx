export default function Main(){
    return(
        <main className="main">
            <img src="images/IMG-9307.jpg" alt="" className="main--profile-Img" />
            {/* tittle */}
            <section className="main--section">
            <div>
                <h2 className="main--myname">Chukwuyem John</h2>
                <h3 className="main--tittle">Frontend Developer</h3>
                <h4 className="main--website"> joeljohn.website</h4>
            </div>
            {/* buttons */}
            <div className="btn">
                {/* import from fontawesome */}
               <img src="images/Button.png" alt="" className="main--email"/>
                <img src="images/Button (1).png" alt="" className="main--linkedin" />
            </div>
            {/* profile */}
            <div className="main--profile_description">
                <h3 className="main--description">About</h3>
                <p className="main--article">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur quisquam soluta ducimus sint architecto tempore quibusdam quia, at iusto?</p>

                <p className="main--article">
                    <h3 className="main--description">Interest</h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, optio aliquam perferendis corporis quaerat laboriosam.
                </p>
            </div>
            </section>
            <footer className="main--footer">
                
                <img src="images/Twitter Icon.png" alt="" />
                <img src="images/Facebook Icon.png" alt="" />
                <img src="images/Instagram Icon.png" alt="" />
                <img src="images/GitHub Icon.png" alt="" />
               
               

            </footer>


        </main>
    )
}