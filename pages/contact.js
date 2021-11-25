import styles from "../styles/Contact.module.css"

const contact = () => {

    return (
        <div>
            <div className = {styles.container}>
            <h1>CONTACT</h1>
                <div>
                    <form className = {styles.card_left}>
                        <input type = "text" placeholder = "NAME"></input>
                        <br />
                        <input type = "email" placeholder = "EMAIL"></input>
                        <br />
                        <textarea placeholder = "MESSAGE"></textarea>
                        <br />
                        <button className = {styles.btn} type = "submit">SEND</button>
                    </form>
                    <div className = {styles.card_right}>
                        <h4>OTHER MEANS</h4>
                        <p>
                            I can be found on most major platforms, simply lookup 
                            <br />
                            <br />
                            <strong>GAURAV</strong>
                            <br />
                            <br />
                            Direct links to some of my most notable profiles 
                            <br />
                            <br />
                            {/* <a href = "mailto: gaurav91306@gmail.com">Email</a>
                            <br /> */}
                            <a href = "https://github.com/GAURAV879">GitHub</a>
                            <br />
                            <a href = "https://linkedin.com/in/GAURAV879">LinkedIn</a>
                            <br />
                            <a href = "https://codeforces.com/profile/GAURAV8799">CodeForces</a>
                            <br />
                            <a href = "https://www.codechef.com/users/GAURAV879">CodeChef</a>
                            <br />
                            <a href = "https://www.hackerrank.com/gaurav91306">HackerRank</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact