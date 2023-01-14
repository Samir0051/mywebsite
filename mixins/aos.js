import AOS from'aos'
import 'aos/dist/aos.css'

export default{
    mounted(){
        AOS.init({ easing: 'ease-out-back',offset:400})
    }
}