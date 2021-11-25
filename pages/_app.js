import Layout from '../components/Layout'
import Particles from 'react-particles-js'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Particles id="particles-js" params={{
                particles: {
                    number: {
                        value: 400,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: '#00ffff'
                        // value: '#FFF'
                    },
                    opacity: {
                        value: 0.5,
                        anim: {
                            enable: true
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 3
                        }
                    },
                    move: {
                        speed: 0.2,
                        bounce : false
                    },
                    line_linked: {
                        enable: false,
                        distance: 50,
                        color: "#00ffff",
                        // color: "#FFF",
                        opacity: 1,
                        width: 1
                    },
                }    
            }} />
        </div>
    )
}

export default MyApp
