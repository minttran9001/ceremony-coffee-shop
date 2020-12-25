import Highway from '@dogstudio/highway'
import { gsap } from 'gsap'

export default class Fade extends Highway.Transition {
    in({ from, to, done }) {
        const t1 = new gsap.timeline();
        t1.fromTo(to, 0.5, { left: "-100%", top: "50%" }, { left: '0%' })
            .fromTo(
                to,
                0.5,
                {
                    height: "2vh"
                },
                {
                    height: "90vh", top: "10%",
                    onComplete :function()
                    {
                        done();
                    }
                }
            );
    }
    out({from,done})
    {
        done()
    }
}