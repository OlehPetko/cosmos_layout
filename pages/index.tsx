import styles from '../styles/home.module.scss'
import cl from 'classnames'
import {Logo} from "../components/Logo";
import {SocialNetworks} from "../components/SocialNetworks";
import {Button} from "../components/Button";
import {Navigation} from "../components/Navigation";
import {Title} from "../components/Title";

export default function Home() {
    return (
        <div>
            <section className={cl(styles.section, styles.sectionMain)}>
                <header>
                    <Logo/>
                    <SocialNetworks/>
                    <Button>
                        Whitepaper
                    </Button>
                </header>
                <nav>
                    <Navigation/>
                    <div>
                        <Title>
                            From dust to dawn
                        </Title>
                        <ul>
                            <li>
                                <Button>Mint</Button>
                            </li>
                            <li>
                                <Button>Connect Wallet</Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </div>
    )
}
